import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Svg, {
    Circle,
    Defs,
    LinearGradient as SvgLinearGradient,
    Line,
    Path,
    Stop,
} from "react-native-svg";

import { styles } from "../styling/Page/homeStyles";

const logo = require("../../assets/logo.png");

const TASK_PERCENT = 82;
const STEPS_PERCENT = 42;

type ActionButtonProps = {
    title: string;
    variant?: "dark" | "outline" | "accent";
};

function ActionButton({
    title,
    variant = "dark",
}: ActionButtonProps) {
    const buttonStyles = [
        styles.actionButton,
        variant === "dark" && styles.actionButtonDark,
        variant === "outline" && styles.actionButtonOutline,
        variant === "accent" && styles.actionButtonAccent,
    ];

    const textStyles = [
        styles.actionButtonText,
        variant === "accent" && styles.actionButtonAccentText,
    ];

    return (
        <TouchableOpacity
            activeOpacity={0.86}
            style={buttonStyles}
        >
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
}

type CircularProgressProps = {
    progress: number;
    size: number;
    strokeWidth: number;
    progressColor: string;
    trackColor: string;
    children: React.ReactNode;
};

function CircularProgress({
    progress,
    size,
    strokeWidth,
    progressColor,
    trackColor,
    children,
}: CircularProgressProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (circumference * progress) / 100;

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={dashOffset}
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            <View style={StyleSheet.absoluteFillObject}>
                <View style={styles.progressRingCenter}>
                    {children}
                </View>
            </View>
        </View>
    );
}

function AvocadoIcon() {
    return (
        <View style={styles.avocadoWrap}>
            <View style={styles.avocadoLeaf} />
            <View style={styles.avocadoOuter}>
                <View style={styles.avocadoInner}>
                    <View style={styles.avocadoPit} />
                </View>
            </View>
        </View>
    );
}

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backgroundGlowTop} />
            <View style={styles.backgroundGlowLeft} />
            <View style={styles.backgroundGlowRight} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <View style={styles.brandRow}>
                        <View style={styles.logoFrame}>
                            <Image
                                source={logo}
                                style={styles.logoImage}
                            />
                        </View>

                        <Text style={styles.headerHeading}>
                            Welcome saurabh
                        </Text>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.85}
                        style={styles.notificationButton}
                    >
                        <Ionicons name="notifications" size={18} color="#FFD45A" />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>

                <View style={styles.greetingBlock}>
                    <Text style={styles.greetingEyebrow}>
                        Hey saurabh!
                    </Text>

                    <Text style={styles.greetingTitle}>
                        Let's crush your goals today
                    </Text>
                </View>

                <View style={styles.progressCard}>
                    <View style={styles.progressGlow} />

                    <Text style={styles.cardTitle}>
                        Overall Tasks Completion
                    </Text>

                    <View style={styles.rangeTabs}>
                        <View style={styles.rangeTabActive}>
                            <Text style={styles.rangeTabActiveText}>Weekly</Text>
                        </View>

                        <Text style={styles.rangeTabText}>Monthly</Text>
                        <Text style={styles.rangeTabText}>Yearly</Text>
                    </View>

                    <View style={styles.progressHeaderRow}>
                        <View style={styles.progressCopy}>
                            <View style={styles.metricRow}>
                                <Text style={styles.metricValue}>82</Text>
                                <Text style={styles.metricLabel}>/ 100 tasks</Text>
                            </View>
                        </View>

                        <CircularProgress
                            progress={TASK_PERCENT}
                            size={86}
                            strokeWidth={10}
                            progressColor="#B8F84F"
                            trackColor="#2A3551"
                        >
                            <Text style={styles.progressPercentText}>82%</Text>
                        </CircularProgress>
                    </View>

                    <View style={styles.progressBarTrack}>
                        <View style={styles.progressBarFill} />
                    </View>
                </View>

                <View style={styles.cardsRow}>
                    <LinearGradient
                        colors={["#B8F84F", "#A8EE42", "#99D936"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.workoutCard}
                    >
                        <View style={styles.workoutContent}>
                            <View>
                                <Text style={styles.workoutTitle}>Push Day</Text>
                                <Text style={styles.workoutSubtitle}>Today's workout</Text>
                            </View>

                            <View style={styles.workoutIconWrap}>
                                <Ionicons name="barbell-outline" size={46} color="#18210E" />
                            </View>

                            <ActionButton title="Start Workout  ->" variant="dark" />
                        </View>
                    </LinearGradient>

                    <View style={styles.darkCard}>
                        <View style={styles.cardLabelRow}>
                            <Ionicons name="footsteps-outline" size={15} color="#8C65FF" />
                            <Text style={styles.cardLabelText}>Steps</Text>
                        </View>

                        <View style={styles.stepsContent}>
                            <View style={styles.stepsRingWrap}>
                                <CircularProgress
                                    progress={STEPS_PERCENT}
                                    size={116}
                                    strokeWidth={12}
                                    progressColor="#8C65FF"
                                    trackColor="#252F47"
                                >
                                    <Text style={styles.stepsValue}>840</Text>
                                    <Text style={styles.stepsGoal}>/ 2000</Text>
                                </CircularProgress>
                            </View>

                            <ActionButton title="View Details  ->" variant="outline" />
                        </View>
                    </View>
                </View>

                <View style={styles.cardsRow}>
                    <View style={styles.darkCard}>
                        <View style={styles.cardLabelRow}>
                            <Ionicons name="water-outline" size={14} color="#64C6FF" />
                            <Text style={styles.cardLabelText}>Water</Text>
                        </View>

                        <View style={styles.waterCardBody}>
                            <View style={styles.bottleNeck} />
                            <View style={styles.bottleShell}>
                                <View style={styles.bottleFill} />
                                <View style={styles.bottleShine} />
                            </View>
                        </View>

                        <View style={styles.waterMetaRow}>
                            <Text style={styles.waterMetaLabel}>Today</Text>
                            <Text style={styles.waterMetaCurrent}>1.2L</Text>
                            <Text style={styles.waterMetaDivider}>/</Text>
                            <Text style={styles.waterMetaGoal}>2.5L</Text>
                        </View>
                    </View>

                    <View style={styles.darkCard}>
                        <View style={styles.nutritionHeader}>
                            <View style={styles.nutritionCopy}>
                                <Text style={styles.nutritionTitle}>Nutrition</Text>
                                <Text style={styles.nutritionSubtitle}>
                                    1,160 kcal remaining
                                </Text>
                            </View>

                            <AvocadoIcon />
                        </View>

                        <ActionButton title="View Details  ->" variant="outline" />
                    </View>
                </View>

                <View style={styles.qrCard}>
                    <View style={styles.qrIconBox}>
                        <Ionicons name="scan-outline" size={24} color="#86B9FF" />
                    </View>

                    <View style={styles.qrCopy}>
                        <Text style={styles.qrTitle}>QR Check-in</Text>
                        <Text style={styles.qrSubtitle}>
                            Scan your gym or meal QR to auto-log tasks.
                        </Text>
                    </View>

                    <ActionButton title="Scan Now" variant="accent" />
                </View>

                <View style={styles.chartCard}>
                    <View style={styles.chartHeader}>
                        <Text style={styles.chartTitle}>
                            Activity Overview
                        </Text>

                        <View style={styles.chartTabs}>
                            <View style={styles.chartTabActive}>
                                <Text style={styles.chartTabActiveText}>W</Text>
                            </View>

                            <Text style={styles.chartTabText}>M</Text>
                            <Text style={styles.chartTabText}>Y</Text>
                        </View>
                    </View>

                    <View style={styles.chartWrap}>
                        <Svg width="100%" height="130" viewBox="0 0 330 130">
                            <Defs>
                                <SvgLinearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                                    <Stop offset="0%" stopColor="#A8EF44" />
                                    <Stop offset="100%" stopColor="#CDFC66" />
                                </SvgLinearGradient>

                                <SvgLinearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                                    <Stop offset="0%" stopColor="rgba(184,248,79,0.38)" />
                                    <Stop offset="100%" stopColor="rgba(184,248,79,0.01)" />
                                </SvgLinearGradient>
                            </Defs>

                            <Line
                                x1="0"
                                y1="115"
                                x2="330"
                                y2="115"
                                stroke="#2D3956"
                                strokeWidth="1"
                            />

                            <Path
                                d="M10 100 C 38 84, 54 62, 80 68 C 106 74, 124 82, 148 62 C 172 42, 198 58, 222 64 C 246 70, 264 42, 292 54 C 308 61, 318 66, 326 68 L 326 115 L 10 115 Z"
                                fill="url(#fillGrad)"
                            />

                            <Path
                                d="M10 100 C 38 84, 54 62, 80 68 C 106 74, 124 82, 148 62 C 172 42, 198 58, 222 64 C 246 70, 264 42, 292 54 C 308 61, 318 66, 326 68"
                                fill="none"
                                stroke="url(#strokeGrad)"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                            <Circle cx="264" cy="52" r="7" fill="#B8F84F" />
                            <Circle cx="264" cy="52" r="14" fill="rgba(184,248,79,0.2)" />
                        </Svg>
                    </View>

                    <View style={styles.daysRow}>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <Text
                                key={day}
                                style={day === "Sat" ? styles.activeDayText : styles.dayText}
                            >
                                {day}
                            </Text>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
