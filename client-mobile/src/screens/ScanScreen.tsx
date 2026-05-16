import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function ScanScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons
                        name="tools"
                        size={42}
                        color="#C8FF4D"
                    />
                </View>

                <Text style={styles.title}>
                    Feature Coming Soon
                </Text>

                <Text style={styles.description}>
                    The scan feature is currently under
                    development and will be implemented in
                    a future update of FitCore.
                </Text>

                <View style={styles.badge}>
                    <Ionicons
                        name="time-outline"
                        size={14}
                        color="#C8FF4D"
                    />

                    <Text style={styles.badgeText}>
                        In Progress
                    </Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Stay Tuned
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05060D",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    card: {
        width: "100%",
        backgroundColor: "#0B1220",
        borderRadius: 30,
        padding: 26,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#1A2B47",
    },

    iconWrapper: {
        width: 90,
        height: 90,
        borderRadius: 999,
        backgroundColor: "rgba(200,255,77,0.08)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },

    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "900",
        marginBottom: 10,
    },

    description: {
        color: "#9DA8BE",
        fontSize: 14,
        lineHeight: 22,
        textAlign: "center",
        marginBottom: 24,
    },

    badge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(200,255,77,0.10)",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        marginBottom: 28,
    },

    badgeText: {
        color: "#C8FF4D",
        marginLeft: 6,
        fontWeight: "700",
        fontSize: 12,
    },

    button: {
        backgroundColor: "#C8FF4D",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
    },

    buttonText: {
        color: "#000",
        fontWeight: "800",
        fontSize: 14,
    },
});