import { useState } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";

type Props = {
    label: string;
    placeholder: string;
    secureTextEntry?: boolean;
};

export default function CustomInput({
    label,
    placeholder,
    secureTextEntry,
}: Props) {
    const [emailFocused, setEmailFocused] = useState(false);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>
                {label}
            </Text>

            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#20ff75"
                style={[
                    styles.input,
                    emailFocused && styles.inputFocused
                ]}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 15,
    },

    label: {
        color: "#FFFFFF",
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "600",
    },

    input: {
        backgroundColor: "#1C2433",

        borderWidth: 1.5,
        borderColor: "#243040",

        borderRadius: 14,

        height: 40,

        paddingHorizontal: 16,

        color: "#E8EDF3",

        fontSize: 14,
    },
    inputFocused: {
        borderColor: "#4EA1FF",
    },
});