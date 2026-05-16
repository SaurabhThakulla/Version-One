import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#09090D",
    },

    scrollContainer: {
        paddingBottom: 130,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.05)",
    },

    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    logoBox: {
        width: 48,
        height: 48,
        borderRadius: 18,
        backgroundColor: "#C8F53B",
        alignItems: "center",
        justifyContent: "center",
    },

    logoText: {
        color: "black",
        fontWeight: "700",
        fontSize: 18,
    },

    communityText: {
        color: "#8C8CA1",
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 10,
    },

    appTitle: {
        color: "white",
        fontSize: 32,
        fontWeight: "700",
    },

    notificationButton: {
        width: 44,
        height: 44,
        borderRadius: 18,
        backgroundColor: "#171720",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        alignItems: "center",
        justifyContent: "center",
    },

    searchWrapper: {
        paddingHorizontal: 20,
        marginTop: 20,
    },

    searchBox: {
        height: 56,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 12,
    },

    searchInput: {
        flex: 1,
        color: "white",
    },

    createActionWrap: {
        marginHorizontal: 20,
        marginTop: 20,
    },

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 28,
        marginBottom: 16,
    },

    sectionTitle: {
        color: "white",
        fontSize: 32,
        fontWeight: "700",
    },

    trendingBadge: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: "rgba(200,245,59,0.1)",
        borderWidth: 1,
        borderColor: "rgba(200,245,59,0.2)",
    },

    trendingText: {
        color: "#C8F53B",
        fontSize: 11,
        fontWeight: "600",
    },

    postsWrapper: {
        paddingHorizontal: 16,
        gap: 16,
    },

    postCard: {
        backgroundColor: "#171720",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        borderRadius: 28,
        padding: 20,
        flexDirection: "row",
        gap: 16,
    },

    voteSection: {
        alignItems: "center",
        gap: 8,
    },

    voteButton: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,0.05)",
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
        alignItems: "center",
        justifyContent: "center",
    },

    voteCount: {
        color: "white",
        fontWeight: "700",
        fontSize: 14,
    },

    postContent: {
        flex: 1,
    },

    postMeta: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },

    postAuthor: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    avatarBox: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        color: "black",
        fontWeight: "700",
    },

    authorName: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
    },

    postTime: {
        color: "#8C8CA1",
        fontSize: 11,
    },

    tagBadge: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
    },

    tagText: {
        fontSize: 10,
        fontWeight: "700",
        textTransform: "uppercase",
    },

    postTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 24,
    },

    postDescription: {
        color: "#8C8CA1",
        fontSize: 14,
        lineHeight: 24,
        marginTop: 12,
    },

    postActionsBottom: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
    },

    bottomActionText: {
        color: "#8C8CA1",
        fontSize: 12,
    },
});
