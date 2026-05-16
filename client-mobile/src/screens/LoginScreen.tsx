import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import SmoothScrollView from "../components/ui/SmoothScrollView";
import { styles } from "../styling/Auth/signupStyles";

const logo = require("../../assets/logo.png");
import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RootStackParamList }
    from "../types/types";

export default function LoginScreen() {
    type NavigationProp =
        NativeStackNavigationProp<
            RootStackParamList
        >;
    const navigation =
        useNavigation<NavigationProp>();
    return (
        <ScreenWrapper>
            <SmoothScrollView
                contentContainerStyle={styles.scrollContainer}
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
                        label="Phone Number"
                        placeholder="Enter your phone number"
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry
                    />

                    {/* Forgot Password */}
                    <TouchableOpacity style={styles.footerWrapper}>
                        <Text style={styles.footerLink}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    {/* Button */}
                    <CustomButton title="Create Account ->" onPress={() => navigation.replace("Main")} />
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
