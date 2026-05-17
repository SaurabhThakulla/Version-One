import { useState } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    label: string;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export default function CustomInput({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    autoCapitalize = "none",
}: Props) {
    const [emailFocused, setEmailFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>
                {label}
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry && !showPassword}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    placeholderTextColor="#20ff75"
                    style={[
                        styles.input,
                        emailFocused && styles.inputFocused
                    ]}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={showPassword ? "eye" : "eye-off"}
                            size={18}
                            color="#4EA1FF"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },

    label: {
        color: "#FFFFFF",
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "600",
    },

    input: {
        backgroundColor: "#1C2433",
        flex: 1,
        borderWidth: 1.5,
        borderColor: "#243040",
        borderRadius: 14,
        height: 40,
        paddingHorizontal: 16,
        paddingRight: 44,
        color: "#E8EDF3",
        fontSize: 14,
    },
    inputFocused: {
        borderColor: "#4EA1FF",
    },

    eyeIcon: {
        position: "absolute",
        right: 12,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 8,
    },
});