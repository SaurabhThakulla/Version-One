import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        left: 16,
        right: 16,
        bottom: 0,
        paddingHorizontal: 14,
        paddingTop: 12,
        backgroundColor: "rgba(5, 10, 20, 0.78)",
    },

    row: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 6,
        paddingHorizontal: 8,
        paddingTop: 12,
        paddingBottom: 8,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "rgba(35, 52, 87, 0.95)",
        backgroundColor: "rgba(7, 18, 37, 0.96)",
        shadowColor: "#000",
        shadowOpacity: 0.42,
        shadowRadius: 28,
        shadowOffset: {
            width: 0,
            height: 14,
        },
        elevation: 16,
    },

    navItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        paddingBottom: 2,
    },

    iconWrap: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    activeIconWrap: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(200,255,99,0.08)",
        shadowColor: "#B8F84F",
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    activeText: {
        color: "#C8FF63",
        fontSize: 11,
        fontWeight: "600",
    },

    inactiveText: {
        color: "#8C97B2",
        fontSize: 11,
        fontWeight: "500",
    },

    centerSlot: {
        flex: 1,
        alignItems: "center",
    },

    centerGlow: {
        position: "absolute",
        top: -2,
        width: 86,
        height: 86,
        borderRadius: 43,
        backgroundColor: "rgba(184,248,79,0.18)",
    },

    centerButton: {
        width: 76,
        height: 76,
        borderRadius: 999,
        marginTop: -46,
        backgroundColor: "#C8FF63",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#B8F84F",
        shadowOpacity: 0.42,
        shadowRadius: 22,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        elevation: 18,
    },
});
