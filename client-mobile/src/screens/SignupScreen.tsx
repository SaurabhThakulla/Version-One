import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
const logo = require("../../assets/logo.png");
import { styles } from "../styling/Auth/signupStyles";
import { useNavigation }
    from "@react-navigation/native";

import {
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RootStackParamList }
    from "../types/types";
export default function SignupScreen() {
    const [isAgreed, setIsAgreed] = useState(false);

    type NavigationProp =
        NativeStackNavigationProp<
            RootStackParamList
        >;
    const navigation =
        useNavigation<NavigationProp>();
    return (
        <ScreenWrapper>
            <ScrollView
                showsVerticalScrollIndicator={false}
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
                        label="Full Name"
                        placeholder="Enter your full name"
                    />

                    <CustomInput
                        label="Phone Number"
                        placeholder="Enter your phone number"
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Create a password"
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
                        <View style={styles.termsWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("checkbox pressed", !isAgreed);  // 👈 add this
                                    setIsAgreed((value) => !value);
                                }}
                                activeOpacity={0.8}
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
                            </TouchableOpacity>

                            <Text style={styles.termsText}>
                                I agree to the{" "}
                                <Text style={styles.linkText}>Terms of Service</Text>{" "}
                                and{" "}
                                <Text style={styles.linkText}>Privacy Policy</Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <CustomButton title="Create Account ->" onPress={() => navigation.replace("Main")} />
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
            </ScrollView>
        </ScreenWrapper>
    );
}
