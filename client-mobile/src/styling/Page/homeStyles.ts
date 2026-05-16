import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#050A14",
    },

    scrollContent: {
        paddingHorizontal: 18,
        paddingTop: 8,
        paddingBottom: 164,
    },

    backgroundGlowTop: {
        position: "absolute",
        top: -110,
        left: -60,
        width: 220,
        height: 220,
        borderRadius: 999,
        backgroundColor: "rgba(30, 70, 126, 0.28)",
    },

    backgroundGlowLeft: {
        position: "absolute",
        left: -130,
        top: 300,
        width: 260,
        height: 260,
        borderRadius: 999,
        backgroundColor: "rgba(184, 248, 79, 0.10)",
    },

    backgroundGlowRight: {
        position: "absolute",
        right: -120,
        top: 520,
        width: 220,
        height: 220,
        borderRadius: 999,
        backgroundColor: "rgba(96, 160, 255, 0.12)",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    brandRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        flex: 1,
        marginRight: 12,
    },

    logoFrame: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
        backgroundColor: "#B8F84F",
        elevation: 8,
        shadowColor: "#B8F84F",
        shadowOpacity: 0.22,
        shadowRadius: 16,
        shadowOffset: {
            width: 0,
            height: 8,
        },
    },

    logoImage: {
        width: "100%",
        height: "100%",
    },

    headerHeading: {
        color: "#F5F7FF",
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 0.2,
    },

    notificationButton: {
        width: 44,
        height: 44,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#31415F",
        backgroundColor: "#16233C",
        alignItems: "center",
        justifyContent: "center",
    },

    notificationDot: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: "#B8F84F",
    },

    greetingBlock: {
        marginTop: 14,
    },

    greetingEyebrow: {
        color: "#A5B3D0",
        fontSize: 14,
        marginBottom: 4,
    },

    greetingTitle: {
        color: "#F5F7FF",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 22,
    },

    progressCard: {
        marginTop: 16,
        paddingHorizontal: 18,
        paddingTop: 16,
        paddingBottom: 18,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(97, 123, 170, 0.28)",
        backgroundColor: "#0D1527",
        overflow: "hidden",
        shadowColor: "#02070F",
        shadowOpacity: 0.45,
        shadowRadius: 28,
        shadowOffset: {
            width: 0,
            height: 14,
        },
        elevation: 10,
    },

    progressGlow: {
        position: "absolute",
        left: 28,
        bottom: -46,
        width: 230,
        height: 150,
        borderRadius: 999,
        backgroundColor: "rgba(184, 248, 79, 0.16)",
    },

    cardTitle: {
        color: "#F0F4FF",
        fontSize: 15,
        fontWeight: "500",
    },

    rangeTabs: {
        marginTop: 14,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 4,
        padding: 3,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#2B3A59",
        backgroundColor: "#101C35",
    },

    rangeTabActive: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: "#B8F84F",
    },

    rangeTabActiveText: {
        color: "#0F1808",
        fontSize: 11,
        fontWeight: "700",
    },

    rangeTabText: {
        paddingHorizontal: 10,
        color: "#94A5C8",
        fontSize: 11,
        fontWeight: "500",
    },

    progressHeaderRow: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
    },

    progressCopy: {
        flex: 1,
    },

    metricRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 10,
    },

    metricValue: {
        color: "#B8F84F",
        fontSize: 54,
        lineHeight: 60,
        fontWeight: "800",
    },

    metricLabel: {
        marginBottom: 10,
        color: "#97A4BF",
        fontSize: 12,
    },

    progressRingCenter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    progressPercentText: {
        color: "#EDF5FF",
        fontSize: 18,
        fontWeight: "700",
    },

    progressBarTrack: {
        width: "100%",
        height: 11,
        marginTop: 16,
        borderRadius: 999,
        backgroundColor: "#27344E",
        overflow: "hidden",
    },

    progressBarFill: {
        width: "82%",
        height: "100%",
        borderRadius: 999,
        backgroundColor: "#B8F84F",
    },

    cardsRow: {
        marginTop: 16,
        flexDirection: "row",
        gap: 12,
    },

    workoutCard: {
        flex: 1,
        minHeight: 182,
        borderRadius: 26,
        overflow: "hidden",
        shadowColor: "rgba(184, 248, 79, 0.35)",
        shadowOpacity: 0.28,
        shadowRadius: 24,
        shadowOffset: {
            width: 0,
            height: 16,
        },
        elevation: 9,
    },

    workoutContent: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },

    workoutTitle: {
        color: "#121A09",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 2,
    },

    workoutSubtitle: {
        color: "rgba(16, 23, 10, 0.88)",
        fontSize: 12,
    },

    workoutIconWrap: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },

    darkCard: {
        flex: 1,
        minHeight: 182,
        padding: 16,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: "rgba(97, 123, 170, 0.22)",
        backgroundColor: "#0D1527",
        justifyContent: "space-between",
    },

    cardLabelRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    cardLabelText: {
        color: "#A5B3D0",
        fontSize: 13,
    },

    stepsContent: {
        flex: 1,
        justifyContent: "space-between",
    },

    stepsRingWrap: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 6,
        marginBottom: 10,
    },

    stepsValue: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
    },

    stepsGoal: {
        color: "#A1AECB",
        fontSize: 10,
        marginTop: 2,
    },

    waterCardBody: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 14,
    },

    bottleNeck: {
        width: 18,
        height: 12,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: "#00AAFF",
    },

    bottleShell: {
        width: 48,
        height: 110,
        padding: 4,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "#00AAFF",
        backgroundColor: "rgba(255,255,255,0.04)",
        justifyContent: "flex-end",
        overflow: "hidden",
    },

    bottleFill: {
        height: "50%",
        borderRadius: 10,
        backgroundColor: "#2FAEFF",
    },

    bottleShine: {
        position: "absolute",
        left: 14,
        top: 16,
        width: 12,
        height: 72,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,0.18)",
    },

    waterMetaRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },

    waterMetaLabel: {
        color: "#94A8C9",
        fontSize: 10,
    },

    waterMetaCurrent: {
        color: "#00CCFF",
        fontSize: 11,
        fontWeight: "700",
    },

    waterMetaDivider: {
        color: "#7B88A8",
        fontSize: 10,
    },

    waterMetaGoal: {
        color: "#B7C3DE",
        fontSize: 10,
    },

    nutritionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 20,
    },

    nutritionCopy: {
        flex: 1,
    },

    nutritionTitle: {
        color: "#F5F7FF",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 12,
    },

    nutritionSubtitle: {
        color: "#B482FF",
        fontSize: 12,
        lineHeight: 18,
    },

    avocadoWrap: {
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
    },

    avocadoLeaf: {
        position: "absolute",
        top: 8,
        right: 20,
        width: 14,
        height: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#7BE053",
        transform: [{ rotate: "-32deg" }],
    },

    avocadoOuter: {
        width: 48,
        height: 58,
        borderRadius: 28,
        backgroundColor: "#7DE65A",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "35deg" }],
    },

    avocadoInner: {
        width: 34,
        height: 42,
        borderRadius: 22,
        backgroundColor: "#C7F86A",
        alignItems: "center",
        justifyContent: "center",
    },

    avocadoPit: {
        width: 14,
        height: 14,
        borderRadius: 999,
        backgroundColor: "#8B5A32",
    },

    qrCard: {
        marginTop: 14,
        padding: 14,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "rgba(97, 123, 170, 0.22)",
        backgroundColor: "#111D34",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    qrIconBox: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: "rgba(120, 183, 255, 0.14)",
        alignItems: "center",
        justifyContent: "center",
    },

    qrCopy: {
        flex: 1,
    },

    qrTitle: {
        color: "#F4F7FF",
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 2,
    },

    qrSubtitle: {
        color: "#95A6C7",
        fontSize: 11,
        lineHeight: 16,
    },

    actionButton: {
        minHeight: 36,
        paddingHorizontal: 14,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
    },

    actionButtonDark: {
        backgroundColor: "rgba(8, 14, 9, 0.72)",
    },

    actionButtonOutline: {
        borderWidth: 1,
        borderColor: "rgba(250, 253, 255, 0.20)",
        backgroundColor: "rgba(7, 13, 26, 0.45)",
    },

    actionButtonAccent: {
        minHeight: 31,
        paddingHorizontal: 12,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "rgba(184, 248, 79, 0.30)",
        backgroundColor: "rgba(184, 248, 79, 0.10)",
    },

    actionButtonText: {
        color: "#EDF2FF",
        fontSize: 12,
        fontWeight: "500",
    },

    actionButtonAccentText: {
        color: "#B8F84F",
        fontSize: 11,
        fontWeight: "600",
    },

    chartCard: {
        marginTop: 16,
        padding: 16,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(97, 123, 170, 0.22)",
        backgroundColor: "#0D1527",
    },

    chartHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },

    chartTitle: {
        color: "#F5F7FF",
        fontSize: 18,
        fontWeight: "700",
    },

    chartTabs: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        padding: 3,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#2B3A59",
        backgroundColor: "#101C35",
    },

    chartTabActive: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: "#B8F84F",
    },

    chartTabActiveText: {
        color: "#0F1808",
        fontSize: 12,
        fontWeight: "700",
    },

    chartTabText: {
        paddingHorizontal: 10,
        color: "#94A5C8",
        fontSize: 12,
    },

    chartWrap: {
        marginTop: 12,
    },

    daysRow: {
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    dayText: {
        color: "#8393B5",
        fontSize: 13,
        textAlign: "center",
    },

    activeDayText: {
        color: "#B8F84F",
        fontSize: 13,
        fontWeight: "700",
        textAlign: "center",
    },
});
