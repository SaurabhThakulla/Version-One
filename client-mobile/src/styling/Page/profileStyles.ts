import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
        backgroundColor: "#050812",
    },

    content: {
        padding: 18,
        paddingBottom: 120,
        gap: 14,
    },

    card: {
        backgroundColor: "#0d1526",
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(98,120,169,0.22)",
    },

    topbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    brand: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#b8f84f",
    },

    brandSmall: {
        color: "#8e9bb6",
        fontSize: 12,
    },

    brandTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },

    topbarActions: {
        flexDirection: "row",
        gap: 8,
    },

    iconBtn: {
        width: 44,
        height: 44,
        borderRadius: 16,
        backgroundColor: "#131f36",
        justifyContent: "center",
        alignItems: "center",
    },

    iconText: {
        color: "#fff",
        fontSize: 16,
    },

    hero: {
        padding: 18,
    },

    eyebrow: {
        color: "#8e9bb6",
        fontSize: 11,
        marginBottom: 10,
    },

    profileMain: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },

    avatar: {
        width: 78,
        height: 78,
        borderRadius: 24,
        backgroundColor: "#b8f84f",
        justifyContent: "center",
        alignItems: "center",
    },

    avatarText: {
        fontSize: 28,
        fontWeight: "800",
        color: "#10170b",
    },

    name: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 8,
    },

    badges: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 10,
    },

    badge: {
        backgroundColor: "rgba(117,182,255,0.1)",
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },

    badgeText: {
        color: "#75b6ff",
        fontSize: 11,
        fontWeight: "700",
    },

    taskDone: {
        color: "#adc0df",
        fontSize: 13,
    },

    miniGrid: {
        flexDirection: "row",
        gap: 10,
    },

    miniCard: {
        flex: 1,
        padding: 16,
    },

    cardLabel: {
        color: "#8e9bb6",
        fontSize: 11,
    },

    cardValue: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
        marginTop: 8,
    },

    subText: {
        color: "#adc0df",
        fontSize: 11,
        marginTop: 5,
    },

    progress: {
        height: 8,
        backgroundColor: "#25344f",
        borderRadius: 999,
        overflow: "hidden",
        marginTop: 12,
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#b8f84f",
    },

    commitCard: {
        padding: 18,
    },

    commitHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    commitTitle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },

    commitMonth: {
        color: "#8e9bb6",
        fontSize: 12,
    },

    commitContainer: {
        flexDirection: "row",
        gap: 10,
    },

    daysColumn: {
        gap: 6,
    },

    dayLabel: {
        color: "#8e9bb6",
        fontSize: 12,
        height: 16,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 140,
        gap: 6,
    },

    commitBox: {
        width: 16,
        height: 16,
        borderRadius: 4,
    },

    level0: {
        backgroundColor: "rgba(255,255,255,0.08)",
    },

    level1: {
        backgroundColor: "rgba(76,175,80,0.25)",
    },

    level2: {
        backgroundColor: "rgba(76,175,80,0.45)",
    },

    level3: {
        backgroundColor: "rgba(76,175,80,0.7)",
    },

    level4: {
        backgroundColor: "#4caf50",
    },

    monthNav: {
        flexDirection: "row",
        gap: 10,
        marginTop: 16,
    },

    monthBtn: {
        flex: 1,
        backgroundColor: "rgba(117,182,255,0.08)",
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: "center",
    },

    monthBtnText: {
        color: "#75b6ff",
        fontWeight: "700",
    },

    achievements: {
        padding: 16,
    },

    sectionHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    sectionTitle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },

    sectionSub: {
        color: "#8e9bb6",
        fontSize: 11,
    },

    achItem: {
        backgroundColor: "rgba(10,18,35,0.6)",
        borderRadius: 16,
        padding: 12,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    achLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    achIcon: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: "rgba(184,248,79,0.12)",
        justifyContent: "center",
        alignItems: "center",
    },

    achTitle: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700",
    },

    achText: {
        color: "#8e9bb6",
        fontSize: 11,
    },

    achValue: {
        backgroundColor: "rgba(184,248,79,0.12)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 999,
    },

    achValueText: {
        color: "#b8f84f",
        fontSize: 11,
        fontWeight: "700",
    },

    bottomNav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: "#081224",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 12,
    },

    navText: {
        color: "#6f7ea0",
        fontSize: 12,
    },

    activeNav: {
        color: "#b8f84f",
    },

    fab: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: "#b8f84f",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
    },

    fabText: {
        fontSize: 28,
        color: "#081108",
        fontWeight: "700",
    },
});