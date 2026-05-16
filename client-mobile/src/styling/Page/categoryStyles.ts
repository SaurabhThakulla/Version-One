import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05060D",
        paddingHorizontal: 12,
        paddingTop: 42,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    logo: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: "#C8FF4D",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    logoText: {
        color: "#000",
        fontWeight: "800",
        fontSize: 14,
    },

    smallText: {
        color: "#B8BED0",
        fontSize: 10,
    },

    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "800",
    },

    notificationBtn: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: "#0D1425",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#1C2840",
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18,
    },

    statCard: {
        width: "31%",
        backgroundColor: "#0A1220",
        borderRadius: 18,
        padding: 14,
        borderWidth: 1,
        borderColor: "#1B2842",
    },

    statLabel: {
        color: "#98A1B8",
        fontSize: 9,
        marginBottom: 10,
    },

    statValue: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "900",
    },

    statNote: {
        color: "#A5AEC2",
        fontSize: 10,
        marginTop: 6,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },

    sectionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "900",
    },

    sectionRight: {
        color: "#A5AEC2",
        fontSize: 11,
    },

    categoryCard: {
        backgroundColor: "#081324",
        borderRadius: 24,
        padding: 16,
        borderWidth: 1,
        borderColor: "#1A2C49",
        marginBottom: 16,
    },

    categoryTop: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },

    categoryIcon: {
        width: 50,
        height: 50,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    categoryIconText: {
        color: "#000",
        fontWeight: "900",
        fontSize: 14,
    },

    categoryContent: {
        flex: 1,
    },

    categoryTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "800",
        marginBottom: 4,
    },

    categoryDescription: {
        color: "#A4AFC5",
        fontSize: 12,
        lineHeight: 18,
    },

    taskBadge: {
        backgroundColor: "#20361A",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
    },

    taskBadgeText: {
        color: "#C8FF4D",
        fontSize: 11,
        fontWeight: "700",
    },

    progressBar: {
        width: "100%",
        height: 8,
        backgroundColor: "#24324D",
        borderRadius: 999,
        overflow: "hidden",
        marginBottom: 10,
    },

    progressFill: {
        height: "100%",
        borderRadius: 999,
    },
    progressBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    progressText: {
        color: "#A5AEC2",
        fontSize: 11,
    },
});
