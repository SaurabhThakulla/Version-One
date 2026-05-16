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
        marginBottom: 18,
    },

    logoRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    logo: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: "#C8FF4D",
        justifyContent: "center",
        alignItems: "center",
    },

    logoText: {
        color: "#000",
        fontWeight: "800",
        fontSize: 14,
    },

    smallText: {
        color: "#7C7C92",
        fontSize: 6,
        letterSpacing: 1,
    },

    brand: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "900",
    },

    notificationBtn: {
        width: 40,
        height: 40,
        borderRadius: 14,
        backgroundColor: "#111320",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#23253A",
    },

    searchContainer: {
        height: 44,
        borderRadius: 16,
        backgroundColor: "#0D0F18",
        borderWidth: 1,
        borderColor: "#1D2030",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        marginBottom: 18,
    },

    searchInput: {
        flex: 1,
        color: "#fff",
        marginLeft: 8,
        fontSize: 12,
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

    trendingBadge: {
        backgroundColor: "#1A220C",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#465A17",
    },

    trendingText: {
        color: "#C8FF4D",
        fontSize: 9,
        fontWeight: "700",
    },

    postCard: {
        flexDirection: "row",
        backgroundColor: "#0B0D14",
        borderRadius: 22,
        padding: 12,
        borderWidth: 1,
        borderColor: "#1B2030",
        marginBottom: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,

        elevation: 5,
    },

    voteContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    voteBtn: {
        width: 32,
        height: 32,
        borderRadius: 12,
        backgroundColor: "#141824",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#252A3D",
    },

    voteCount: {
        color: "#C8FF4D",
        fontSize: 13,
        fontWeight: "800",
        marginVertical: 8,
    },

    postContent: {
        flex: 1,
    },

    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },

    userRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    smallAvatar: {
        width: 32,
        height: 32,
        borderRadius: 10,
        backgroundColor: "#C8FF4D",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    smallAvatarText: {
        color: "#000",
        fontWeight: "800",
        fontSize: 12,
    },

    username: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 12,
    },

    time: {
        color: "#7C8396",
        fontSize: 10,
        marginTop: 1,
    },

    tag: {
        backgroundColor: "rgba(200,255,77,0.12)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "rgba(200,255,77,0.18)",
    },

    tagText: {
        color: "#C8FF4D",
        fontSize: 8,
        fontWeight: "800",
        letterSpacing: 0.5,
    },

    postTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "900",
        lineHeight: 22,
        marginBottom: 8,
    },

    postDescription: {
        color: "#9AA0B5",
        fontSize: 11,
        lineHeight: 18,
        marginBottom: 14,
    },

    bottomActions: {
        flexDirection: "row",
        alignItems: "center",
    },

    commentBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#141824",
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#252A3D",
    },

    commentText: {
        color: "#D8DCE8",
        marginLeft: 6,
        fontWeight: "700",
        fontSize: 11,
    },
});
