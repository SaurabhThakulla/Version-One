import { useMemo, useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Animated,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../types/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type StepKey = "fitness" | "habits" | "diet" | "community" | "lifestyle";

const { width } = Dimensions.get("window");

const ACCENT = "#22C55E";
const BG = "#0E0E10";      
const CARD_BG = "#161C26";
const INK = "#F4F7FB";
const MUTED = "#8A93A3";
const BORDER = "#243040";
const SELECTED_BG = "#22C55E";
const SELECTED_TEXT = "#0E0E10";

const steps: Array<{
    key: StepKey;
    index: string;
    title: string;
    subtitle: string;
    choices: string[];
}> = [
        {
            key: "fitness",
            index: "01",
            title: "What brings\nyou here?",
            subtitle: "Pick the goals that feel most urgent right now.",
            choices: ["Lose weight", "Build muscle", "More endurance", "General health"],
        },
        {
            key: "habits",
            index: "02",
            title: "Which habits\nneed work?",
            subtitle: "Small, consistent actions compound into big change.",
            choices: ["Meditation", "Reading", "Journaling", "Better sleep"],
        },
        {
            key: "diet",
            index: "03",
            title: "How do\nyou eat?",
            subtitle: "We'll shape your meal guidance around your lifestyle.",
            choices: ["No preference", "Vegetarian", "Vegan", "High-protein"],
        },
        {
            key: "community",
            index: "04",
            title: "Solo grind or\ncrew energy?",
            subtitle: "Choose how you like to stay accountable.",
            choices: ["Accountability buddy", "Group challenges", "Solo + leaderboard"],
        },
        {
            key: "lifestyle",
            index: "05",
            title: "What matters\nmost to you?",
            subtitle: "One last question — then your profile is ready.",
            choices: ["Career & focus", "Mental health", "Physical fitness", "Creativity"],
        },
    ];

export default function PreSignupScreen() {
    const navigation = useNavigation<NavigationProp>();
    const [stepIndex, setStepIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;

    const [selections, setSelections] = useState<Record<StepKey, string[]>>({
        fitness: [],
        habits: [],
        diet: [],
        community: [],
        lifestyle: [],
    });

    const currentStep = steps[stepIndex];

    const animateTransition = (direction: "forward" | "back", callback: () => void) => {
        const toValue = direction === "forward" ? -20 : 20;
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 0, duration: 160, useNativeDriver: true }),
            Animated.timing(slideAnim, { toValue, duration: 160, useNativeDriver: true }),
        ]).start(() => {
            callback();
            slideAnim.setValue(direction === "forward" ? 20 : -20);
            Animated.parallel([
                Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
                Animated.timing(slideAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
            ]).start();
        });
    };

    const toggleChoice = (choice: string) => {
        setSelections((current) => {
            const selected = current[currentStep.key];
            const next = selected.includes(choice)
                ? selected.filter((item) => item !== choice)
                : [...selected, choice];
            return { ...current, [currentStep.key]: next };
        });
    };

    const nextStep = () => {
        if (stepIndex === steps.length - 1) {
            navigation.navigate("Signup");
            return;
        }
        animateTransition("forward", () => setStepIndex((i) => i + 1));
    };

    const previousStep = () => {
        if (stepIndex === 0) return;
        animateTransition("back", () => setStepIndex((i) => i - 1));
    };

    const selectedCount = selections[currentStep.key].length;

    return (
        <SafeAreaView style={styles.container}>
            {/* Top bar */}
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={previousStep}
                    disabled={stepIndex === 0}
                    style={[styles.backBtn, stepIndex === 0 && { opacity: 0 }]}
                >
                    <Ionicons name="arrow-back" size={18} color={INK} />
                </TouchableOpacity>

                {/* Step dots */}
                <View style={styles.dotsRow}>
                    {steps.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                i === stepIndex && styles.dotActive,
                                i < stepIndex && styles.dotDone,
                            ]}
                        />
                    ))}
                </View>

                {/* Step counter */}
                <Text style={styles.stepCounter}>
                    {currentStep.index}/{steps.length.toString().padStart(2, "0")}
                </Text>
            </View>

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                    {/* Heading block */}
                    <View style={styles.headingBlock}>
                        <Text style={styles.stepLabel}>
                            {currentStep.key.toUpperCase()}
                        </Text>
                        <Text style={styles.title}>{currentStep.title}</Text>
                        <Text style={styles.subtitle}>{currentStep.subtitle}</Text>
                    </View>

                    {/* Choices */}
                    <View style={styles.choicesGrid}>
                        {currentStep.choices.map((choice, i) => {
                            const selected = selections[currentStep.key].includes(choice);
                            return (
                                <TouchableOpacity
                                    key={choice}
                                    activeOpacity={0.78}
                                    style={[styles.choiceCard, selected && styles.choiceCardSelected]}
                                    onPress={() => toggleChoice(choice)}
                                >
                                    <View style={styles.choiceInner}>
                                        <Text style={[styles.choiceNumber, selected && styles.choiceNumberSelected]}>
                                            {String(i + 1).padStart(2, "0")}
                                        </Text>
                                        <Text style={[styles.choiceText, selected && styles.choiceTextSelected]}>
                                            {choice}
                                        </Text>
                                        {selected && (
                                            <View style={styles.checkBadge}>
                                                <Ionicons name="checkmark" size={11} color={SELECTED_TEXT} />
                                            </View>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    {/* Selection hint */}
                    <Text style={styles.hint}>
                        {selectedCount === 0
                            ? "Select one or more"
                            : `${selectedCount} selected · tap again to deselect`}
                    </Text>

                    {/* Last step note */}
                    {currentStep.key === "lifestyle" && (
                        <View style={styles.finalNote}>
                            <Ionicons name="sparkles-outline" size={14} color={MUTED} />
                            <Text style={styles.finalNoteText}>
                                Your profile is built after signup — takes 10 seconds.
                            </Text>
                        </View>
                    )}
                </Animated.View>
            </ScrollView>

            {/* Bottom CTA */}
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.ctaButton}
                    activeOpacity={0.88}
                    onPress={nextStep}
                >
                    <Text style={styles.ctaText}>
                        {stepIndex === steps.length - 1 ? "Create my profile" : "Continue"}
                    </Text>
                </TouchableOpacity>

                {stepIndex === 0 && (
                    <Text style={styles.skipText}>No account required to explore</Text>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
    },

    /* Top navigation bar */
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
    },
    backBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: CARD_BG,
        borderWidth: 1,
        borderColor: BORDER,
        alignItems: "center",
        justifyContent: "center",
    },
    dotsRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: BORDER,
    },
    dotActive: {
        width: 20,
        backgroundColor: INK,
        borderRadius: 3,
    },
    dotDone: {
        backgroundColor: ACCENT,
    },
    stepCounter: {
        width: 36,
        textAlign: "right",
        fontFamily: "Courier New",
        fontSize: 11,
        color: MUTED,
        letterSpacing: 0.5,
    },

    /* Scroll content */
    scroll: {
        paddingHorizontal: 24,
        paddingBottom: 32,
    },

    /* Heading */
    headingBlock: {
        paddingTop: 8,
        paddingBottom: 28,
    },
    stepLabel: {
        fontFamily: "Courier New",
        fontSize: 10,
        letterSpacing: 2.5,
        color: MUTED,
        marginBottom: 12,
    },
    title: {
        fontSize: 38,
        fontWeight: "700",
        color: INK,
        lineHeight: 44,
        letterSpacing: -1,
        marginBottom: 10,
        // If you have a serif font loaded, set fontFamily here e.g. "Playfair Display"
    },
    subtitle: {
        fontSize: 15,
        color: MUTED,
        lineHeight: 22,
        letterSpacing: 0.1,
    },

    /* Choice cards */
    choicesGrid: {
        gap: 10,
    },
    choiceCard: {
        backgroundColor: CARD_BG,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: BORDER,
        overflow: "hidden",
    },
    choiceCardSelected: {
        backgroundColor: SELECTED_BG,
        borderColor: SELECTED_BG,
    },
    choiceInner: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 18,
        paddingVertical: 18,
        gap: 14,
    },
    choiceNumber: {
        fontFamily: "Courier New",
        fontSize: 11,
        color: "#8A93A3",
        letterSpacing: 0.5,
        width: 22,
    },
    choiceNumberSelected: {
        color: SELECTED_TEXT,
    },
    choiceText: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: INK,
        letterSpacing: -0.2,
    },
    choiceTextSelected: {
        color: SELECTED_TEXT,
    },
    checkBadge: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: "rgba(14,14,16,0.16)",
        alignItems: "center",
        justifyContent: "center",
    },

    /* Hint */
    hint: {
        marginTop: 14,
        fontSize: 12,
        color: MUTED,
        textAlign: "center",
        letterSpacing: 0.2,
    },

    /* Final step note */
    finalNote: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 24,
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: CARD_BG,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: BORDER,
    },
    finalNoteText: {
        flex: 1,
        fontSize: 13,
        color: MUTED,
        lineHeight: 19,
    },

    /* Bottom CTA */
    bottomBar: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 28,
        borderTopWidth: 1,
        borderTopColor: ACCENT,
        backgroundColor: BG,
        gap: 12,
        alignItems: "center",
    },
    ctaButton: {
        width: "100%",
        height: 54,
        borderRadius: 14,
        backgroundColor: ACCENT,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    ctaText: {
        color: ACCENT,
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: -0.3,
    },
    ctaArrow: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: ACCENT,
        alignItems: "center",
        justifyContent: "center",
    },
    skipText: {
        fontSize: 12,
        color: MUTED,
        letterSpacing: 0.1,
    },
});