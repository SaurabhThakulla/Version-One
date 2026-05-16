import React from "react";
import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import AppSectionScreen from "../components/ui/AppSectionScreen";

export default function TasksScreen() {
    return (
        <AppSectionScreen
            eyebrow="Execution"
            title="Tasks"
            description="Keep the next important actions visible so your routine stays simple and hard to skip."
            heroTitle="Today's Focus Stack"
            heroDescription="Three priority habits are queued for you right now. Finish the first one early and the rest gets much easier."
            heroAction="Open Task Queue  ->"
            heroColors={["#C89BFF", "#9B6DFF", "#6A54F7"]}
            heroIcon={<MaterialCommunityIcons name="notebook-edit-outline" size={28} color="#160E22" />}
            insights={[
                {
                    icon: <Ionicons name="checkmark-done-outline" size={20} color="#C8FF63" />,
                    label: "Completed",
                    value: "09",
                    note: "3 tasks left to finish today",
                    accentBackground: "rgba(184,248,79,0.10)",
                    accentText: "#C8FF63",
                },
                {
                    icon: <Ionicons name="timer-outline" size={20} color="#D0B2FF" />,
                    label: "Deep Work",
                    value: "52m",
                    note: "Longest session this week",
                    accentBackground: "rgba(155,109,255,0.14)",
                    accentText: "#D0B2FF",
                },
            ]}
            summaryTitle="Priority Check"
            summaryDescription="Your recovery, workout, and meal prep tasks are the highest-impact wins for tonight."
            summaryAction="Review Priorities  ->"
            summaryIcon={<MaterialCommunityIcons name="target-variant" size={25} color="#D0B2FF" />}
        />
    );
}
