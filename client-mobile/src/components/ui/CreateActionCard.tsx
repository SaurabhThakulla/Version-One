import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    StyleProp,
    ViewStyle,
} from "react-native";

import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

type Props = {
    title: string;
    description: string;
    image?: ImageSourcePropType;
    iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    buttonText?: string;
    eyebrow?: string;
    helperText?: string;
    accentColor?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

export default function CreateActionCard({
    title,
    description,
    image,
    iconName = "shape-plus-outline",
    buttonText = "Create",
    eyebrow = "Quick Action",
    helperText = "Reusable shortcut",
    accentColor = "#C8FF4D",
    onPress,
    style,
}: Props) {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.topRow}>
                <View
                    style={[
                        styles.graphicWrap,
                        { backgroundColor: accentColor },
                    ]}
                >
                    {image ? (
                        <Image
                            source={image}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={30}
                            color="#051008"
                        />
                    )}
                </View>

                <View style={styles.copyWrap}>
                    <Text style={styles.eyebrow}>
                        {eyebrow}
                    </Text>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.helperChip}>
                    <Ionicons
                        name="flash"
                        size={14}
                        color={accentColor}
                    />

                    <Text
                        style={[
                            styles.helperText,
                            { color: accentColor },
                        ]}
                    >
                        {helperText}
                    </Text>
                </View>

                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: accentColor },
                    ]}
                    onPress={onPress}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="add"
                        size={18}
                        color="#041007"
                    />

                    <Text style={styles.buttonText}>
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#081324",
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "#1A2C49",
        marginBottom: 18,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        marginBottom: 18,
    },
    graphicWrap: {
        width: 68,
        height: 68,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
    },
    copyWrap: {
        flex: 1,
    },
    image: {
        width: 42,
        height: 42,
    },
    eyebrow: {
        color: "#8EA0BF",
        fontSize: 11,
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: 0.8,
        marginBottom: 6,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "900",
        marginBottom: 6,
    },
    description: {
        fontSize: 13,
        color: "#A4AFC5",
        lineHeight: 19,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
    },
    helperChip: {
        flex: 1,
        minHeight: 42,
        borderRadius: 14,
        backgroundColor: "#101C31",
        borderWidth: 1,
        borderColor: "#1A2C49",
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    helperText: {
        marginLeft: 8,
        fontSize: 11,
        fontWeight: "700",
    },
    button: {
        height: 48,
        minWidth: 100,
        paddingHorizontal: 16,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 4,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 14,
        color: "#061008",
        fontWeight: "800",
    },
});
