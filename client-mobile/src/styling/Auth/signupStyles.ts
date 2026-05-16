import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 6,
        paddingBottom: 30,
    },

    headerWrapper: {
        alignItems: "center",
        marginBottom: 22,
    },

    headerRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    heading: {
        fontSize: 26,
        fontWeight: "700",
        color: "#2DD4BF",
        letterSpacing: 0.3,
    },

    logo: {
        width: 44,
        height: 44,
        borderRadius: 999,
        backgroundColor: "#111827",
        marginLeft: 10,
        shadowColor: "#2DD4BF",
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 6,
    },

    headingLine: {
        width: 34,
        height: 3,
        borderRadius: 999,
        backgroundColor: "#2DD4BF",
        marginTop: 10,
        alignSelf: "flex-start",
        marginLeft: 18,
    },

    formCard: {
        backgroundColor: "#161C26",
        borderWidth: 1,
        borderColor: "#243040",
        borderRadius: 22,
        paddingHorizontal: 22,
        paddingVertical: 24,
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 18,
        shadowOffset: {
            width: 0,
            height: 8,
        },

        elevation: 8,
    },

    inputWrapper: {
        marginBottom: 18,
    },
    

    label: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
    },

    input: {
        height: 56,
        backgroundColor: "#e4e5e7",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 14,
        paddingHorizontal: 16,
        color: "#E8EDF3",
        fontSize: 14,
    },
    inputFocused: {
        borderColor: "#2DD4BF",
        borderWidth: 1.5,
    },

    termsWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 20,
    },

    checkbox: {
        width: 18,
        height: 18,
        minWidth: 18,
        minHeight: 18,
        flexShrink: 0,
        borderWidth: 1,
        borderColor: "#243040",
        backgroundColor: "#1C2433",
        borderRadius: 5,
        marginRight: 10,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
    },

    checkboxChecked: {
        backgroundColor: "#2DD4BF",
        borderColor: "#2DD4BF",
    },

    termsText: {
        flex: 1,
        color: "#6B7A90",
        fontSize: 12,
        lineHeight: 18,
    },

    linkText: {
        color: "#2DD4BF",
        fontWeight: "600",
    },

    primaryButton: {
        height: 54,
        borderRadius: 14,
        backgroundColor: "#2DD4BF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#2DD4BF",
        shadowOpacity: 0.35,
        shadowRadius: 14,
        shadowOffset: {
            width: 0,
            height: 4,
        },

        elevation: 7,
    },

    primaryButtonText: {
        color: "#0D1117",
        fontSize: 16,
        fontWeight: "700",
    },

    dividerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 26,
    },

    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#243040",
    },

    dividerText: {
        color: "#6B7A90",
        fontSize: 12,
        marginHorizontal: 12,
    },

    socialWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },

    socialButton: {
        flex: 1,
        height: 56,
        backgroundColor: "#161C26",
        borderWidth: 1,
        borderColor: "#243040",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 14,
    },

    socialText: {
        color: "#E8EDF3",
        fontSize: 13,
        fontWeight: "500",
    },

    footerWrapper: {
        marginTop: 26,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    footerText: {
        color: "#6B7A90",
        fontSize: 13,
    },

    footerLink: {
        color: "#2DD4BF",
        fontWeight: "600",
        marginLeft: 6,
    },
    
});



