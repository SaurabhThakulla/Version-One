import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

type Props = {
    title: string;
    onPress?: () => void;
};

export default function CustomButton({
    title,
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 48,
        minWidth: 120,

        backgroundColor: "#2DD4BF",

        borderRadius: 16,

        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#2DD4BF",
        shadowOpacity: 0.35,
        shadowRadius: 14,

        shadowOffset: {
            width: 0,
            height: 4,
        },

        elevation: 8,
    },

    text: {
        color: "#0D1117",

        fontSize: 16,

        fontWeight: "700",
    },
});