import React, { ReactNode } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type InsightCard = {
    icon: ReactNode;
    label: string;
    value: string;
    note: string;
    accentBackground: string;
    accentText: string;
};

type AppSectionScreenProps = {
    eyebrow: string;
    title: string;
    description: string;
    heroTitle: string;
    heroDescription: string;
    heroAction: string;
    heroIcon: ReactNode;
    heroColors: readonly [string, string, ...string[]];
    insights: [InsightCard, InsightCard];
    summaryTitle: string;
    summaryDescription: string;
    summaryAction: string;
    summaryIcon: ReactNode;
};

export default function AppSectionScreen({
    eyebrow,
    title,
    description,
    heroTitle,
    heroDescription,
    heroAction,
    heroIcon,
    heroColors,
    insights,
    summaryTitle,
    summaryDescription,
    summaryAction,
    summaryIcon,
}: AppSectionScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.glowTop} />
            <View style={styles.glowLeft} />
            <View style={styles.glowRight} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.eyebrow}>
                    {eyebrow}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.description}>
                    {description}
                </Text>

                <LinearGradient
                    colors={heroColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.heroCard}
                >
                    <View style={styles.heroTopRow}>
                        <View style={styles.heroCopy}>
                            <Text style={styles.heroTitle}>
                                {heroTitle}
                            </Text>

                            <Text style={styles.heroDescription}>
                                {heroDescription}
                            </Text>
                        </View>

                        <View style={styles.heroIconWrap}>
                            {heroIcon}
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.86}
                        style={styles.heroButton}
                    >
                        <Text style={styles.heroButtonText}>
                            {heroAction}
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.insightsRow}>
                    {insights.map((item) => (
                        <View
                            key={item.label}
                            style={styles.insightCard}
                        >
                            <View
                                style={[
                                    styles.insightIconWrap,
                                    { backgroundColor: item.accentBackground },
                                ]}
                            >
                                {item.icon}
                            </View>

                            <Text style={styles.insightLabel}>
                                {item.label}
                            </Text>

                            <Text style={styles.insightValue}>
                                {item.value}
                            </Text>

                            <Text
                                style={[
                                    styles.insightNote,
                                    { color: item.accentText },
                                ]}
                            >
                                {item.note}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.summaryCard}>
                    <View style={styles.summaryHeader}>
                        <View style={styles.summaryCopy}>
                            <Text style={styles.summaryTitle}>
                                {summaryTitle}
                            </Text>

                            <Text style={styles.summaryDescription}>
                                {summaryDescription}
                            </Text>
                        </View>

                        <View style={styles.summaryIconWrap}>
                            {summaryIcon}
                        </View>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.86}
                        style={styles.summaryButton}
                    >
                        <Text style={styles.summaryButtonText}>
                            {summaryAction}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#050A14",
    },

    glowTop: {
        position: "absolute",
        top: -120,
        left: -40,
        width: 220,
        height: 220,
        borderRadius: 999,
        backgroundColor: "rgba(54, 90, 168, 0.20)",
    },

    glowLeft: {
        position: "absolute",
        left: -120,
        top: 320,
        width: 260,
        height: 260,
        borderRadius: 999,
        backgroundColor: "rgba(184,248,79,0.10)",
    },

    glowRight: {
        position: "absolute",
        right: -120,
        top: 520,
        width: 220,
        height: 220,
        borderRadius: 999,
        backgroundColor: "rgba(86,132,255,0.12)",
    },

    scrollContent: {
        paddingHorizontal: 18,
        paddingTop: 6,
        paddingBottom: 164,
    },

    eyebrow: {
        color: "#8FA0C2",
        fontSize: 12,
        fontWeight: "600",
        letterSpacing: 1.3,
        textTransform: "uppercase",
    },

    title: {
        marginTop: 8,
        color: "#F5F7FF",
        fontSize: 30,
        fontWeight: "800",
    },

    description: {
        marginTop: 8,
        color: "#9AA8C7",
        fontSize: 14,
        lineHeight: 21,
    },

    heroCard: {
        marginTop: 20,
        padding: 18,
        borderRadius: 28,
        minHeight: 188,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 20,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        elevation: 10,
    },

    heroTopRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
    },

    heroCopy: {
        flex: 1,
    },

    heroTitle: {
        color: "#081008",
        fontSize: 22,
        fontWeight: "800",
    },

    heroDescription: {
        marginTop: 8,
        color: "rgba(7,16,8,0.74)",
        fontSize: 13,
        lineHeight: 19,
    },

    heroIconWrap: {
        width: 62,
        height: 62,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.28)",
    },

    heroButton: {
        marginTop: "auto",
        alignSelf: "flex-start",
        minHeight: 40,
        paddingHorizontal: 18,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(8,14,9,0.76)",
    },

    heroButtonText: {
        color: "#F2F9DD",
        fontSize: 12,
        fontWeight: "600",
    },

    insightsRow: {
        marginTop: 16,
        flexDirection: "row",
        gap: 12,
    },

    insightCard: {
        flex: 1,
        padding: 16,
        minHeight: 148,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "rgba(92,112,155,0.24)",
        backgroundColor: "#0D1527",
    },

    insightIconWrap: {
        width: 42,
        height: 42,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    insightLabel: {
        marginTop: 14,
        color: "#A5B3D0",
        fontSize: 12,
        fontWeight: "600",
    },

    insightValue: {
        marginTop: 10,
        color: "#F5F7FF",
        fontSize: 22,
        fontWeight: "800",
    },

    insightNote: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: "600",
    },

    summaryCard: {
        marginTop: 16,
        padding: 18,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: "rgba(92,112,155,0.24)",
        backgroundColor: "#101B31",
    },

    summaryHeader: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 14,
    },

    summaryCopy: {
        flex: 1,
    },

    summaryTitle: {
        color: "#F5F7FF",
        fontSize: 18,
        fontWeight: "700",
    },

    summaryDescription: {
        marginTop: 8,
        color: "#95A6C7",
        fontSize: 13,
        lineHeight: 20,
    },

    summaryIconWrap: {
        width: 54,
        height: 54,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(120,183,255,0.10)",
    },

    summaryButton: {
        marginTop: 16,
        alignSelf: "flex-start",
        minHeight: 38,
        paddingHorizontal: 16,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "rgba(250,253,255,0.18)",
        backgroundColor: "rgba(7,13,26,0.45)",
    },

    summaryButtonText: {
        color: "#EDF2FF",
        fontSize: 12,
        fontWeight: "600",
    },
});
