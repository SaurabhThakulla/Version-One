import React from "react";
import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import AppSectionScreen from "../components/ui/AppSectionScreen";

export default function ProgressScreen() {
    return (
        <AppSectionScreen
            eyebrow="Growth"
            title="Progress"
            description="Track consistency, streak quality, and momentum across your routines."
            heroTitle="Consistency Pulse"
            heroDescription="Your weekly rhythm is strong. Keep the chain alive and you will hit a new personal best this weekend."
            heroAction="View Weekly Trend  ->"
            heroColors={["#9BE7FF", "#6CA7FF", "#516DFF"]}
            heroIcon={<MaterialCommunityIcons name="chart-timeline-variant" size={28} color="#081321" />}
            insights={[
                {
                    icon: <Ionicons name="flash-outline" size={20} color="#C8FF63" />,
                    label: "Current Streak",
                    value: "12 Days",
                    note: "2 days from a new badge",
                    accentBackground: "rgba(184,248,79,0.10)",
                    accentText: "#C8FF63",
                },
                {
                    icon: <MaterialCommunityIcons name="clock-outline" size={20} color="#8FD7FF" />,
                    label: "Focus Hours",
                    value: "8.4h",
                    note: "1.2h above last week",
                    accentBackground: "rgba(120,183,255,0.12)",
                    accentText: "#8FD7FF",
                },
            ]}
            summaryTitle="Momentum Forecast"
            summaryDescription="If you keep your current pace, your completion score should cross 90% before the week closes."
            summaryAction="Open Full Report  ->"
            summaryIcon={<MaterialCommunityIcons name="rocket-launch-outline" size={26} color="#8FD7FF" />}
        />
    );
}
