import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import SmoothScrollView from "../components/ui/SmoothScrollView";
const logo = require("../../assets/logo.png");
import { styles } from "../styling/Auth/signupStyles";
import { useNavigation }
    from "@react-navigation/native";

import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RootStackParamList }
    from "../types/types";
import { signup } from "../api/auth";
import { useAuthStore } from "../store/authStore";

export default function SignupScreen() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [username, setUsername] = useState("");
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

    const handleSignup = async () => {
        if (!isAgreed) {
            Alert.alert("Terms required", "Please accept the terms to continue.");
            return;
        }

        if (!username || !email || !password) {
            Alert.alert("Missing details", "Please fill in username, email, and password.");
            return;
        }

        try {
            setIsSubmitting(true);
            const response = await signup({ username, email, password });

            if (!response.token) {
                throw new Error("Token missing from signup response");
            }

            await setToken(response.token);
        } catch (error) {
            Alert.alert("Signup failed", "Please check your details and try again.");
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
                            Create Account
                        </Text>
                        <Image
                            source={logo}
                            style={styles.logo}
                        />
                    </View>

                    <View style={styles.headingLine} />
                </View>

                {/* Form Card */}
                <View style={styles.formCard}>
                    <CustomInput
                        label="Username"
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="words"
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        
                    />

                    {/* Terms */}
                    <TouchableOpacity
                        style={styles.termsWrapper}
                        activeOpacity={0.8}
                        onPress={() => setIsAgreed((value) => !value)}
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: isAgreed }}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                isAgreed && styles.checkboxChecked,
                            ]}
                        >
                            {isAgreed && (
                                <Ionicons
                                    name="checkmark"
                                    size={12}
                                    color="#0D1117"
                                />
                            )}
                        </View>

                        <Text style={styles.termsText}>
                            I agree to the{" "}
                            <Text style={styles.linkText}>Terms of Service</Text>{" "}
                            and{" "}
                            <Text style={styles.linkText}>Privacy Policy</Text>
                        </Text>
                    </TouchableOpacity>
                    <CustomButton
                        title={isSubmitting ? "Creating..." : "Create Account"}
                        onPress={handleSignup}
                    />
                </View>

                {/* Divider */}
                <View style={styles.dividerWrapper}>
                    <View style={styles.dividerLine} />

                    <Text style={styles.dividerText}>
                        or sign up with
                    </Text>

                    <View style={styles.dividerLine} />
                </View>

                {/* Social Buttons */}
                <View style={styles.socialWrapper}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome
                            name="google"
                            size={16}
                            color="#EA4335"
                        />

                        <Text style={styles.socialText}>
                            Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons
                            name="logo-apple"
                            size={18}
                            color="white"
                        />

                        <Text style={styles.socialText}>
                            Apple
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons
                            name="logo-facebook"
                            size={18}
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
                        Already have an account?
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.footerLink}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </SmoothScrollView>
        </ScreenWrapper>
    );
}
