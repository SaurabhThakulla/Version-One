import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { useState, useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import SmoothScrollView from "../components/ui/SmoothScrollView";
import { styles } from "../styling/Auth/signupStyles";
import { login } from "../api/auth";
import { useAuthStore } from "../store/authStore";
import { Alert } from "react-native";
import axios from "axios";

const logo = require("../../assets/logo.png");
import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RootStackParamList }
    from "../types/types";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const token = useAuthStore((state) => state.token);
    const setToken = useAuthStore((state) => state.setToken);

    type NavigationProp =
        NativeStackNavigationProp<
            RootStackParamList
        >;
    const navigation =
        useNavigation<NavigationProp>();

    useEffect(() => {
        if (token) {
            navigation.reset({
                index: 0,
                routes: [{ name: "Main" }],
            });
        }
    }, [token]);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Missing details", "Please fill in email and password.");
            return;
        }

        try {
            setIsSubmitting(true);
            const response = await login({ email, password });

            if (!response.token) {
                throw new Error("Token missing from login response");
            }

            await setToken(response.token);
        } catch (error) {
            const message = axios.isAxiosError<{ message?: string }>(error)
                ? error.response?.data?.message ??
                (error.message.includes("Network Error")
                    ? "Cannot reach server. Check EXPO_PUBLIC_API_URL and ensure backend is running on port 4000."
                    : "Please check your details and try again.")
                : "Please check your details and try again.";
            Alert.alert("Login failed", message);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <ScreenWrapper>
            <SmoothScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <View style={styles.headerRow}>
                        <Text style={styles.heading}>
                            Welcome Back
                        </Text>

                        <Image
                            source={logo}
                            style={styles.logo}
                        />
                    </View>

                    <Text style={styles.footerText}>
                        Login to continue your journey
                    </Text>

                    <View style={styles.headingLine} />
                </View>

                {/* Form Card */}
                <View style={styles.formCard}>
                    <CustomInput
                        label="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    {/* Forgot Password */}
                    {/* <TouchableOpacity style={styles.footerWrapper}>
                        <Text style={styles.footerLink}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity> */}

                    {/* Button */}
                    <CustomButton title={isSubmitting ? "Logging in..." : "Login "} onPress={handleLogin} />
                </View>

                {/* Divider */}
                <View style={styles.dividerWrapper}>
                    <View style={styles.dividerLine} />

                    <Text style={styles.dividerText}>
                        or continue with
                    </Text>

                    <View style={styles.dividerLine} />
                </View>

                {/* Socials */}
                <View style={styles.socialWrapper}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome
                            name="google"
                            size={20}
                            color="#EA4335"
                        />

                        <Text style={styles.socialText}>
                            Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons
                            name="logo-apple"
                            size={22}
                            color="white"
                        />

                        <Text style={styles.socialText}>
                            Apple
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons
                            name="logo-facebook"
                            size={20}
                            color="#1877F2"
                        />

                        <Text style={styles.socialText}>
                            Facebook
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Footer */}
                <View style={styles.footerWrapper}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={styles.footerLink}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </SmoothScrollView>
        </ScreenWrapper>
    );
}
