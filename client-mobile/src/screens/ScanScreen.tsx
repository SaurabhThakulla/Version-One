import React from "react";
import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import AppSectionScreen from "../components/ui/AppSectionScreen";

export default function ScanScreen() {
    return (
        <AppSectionScreen
            eyebrow="Quick Action"
            title="Scan Hub"
            description="Use one tap to log workouts, meals, or gym check-ins without typing anything."
            heroTitle="Ready to Scan"
            heroDescription="Point your camera at a gym QR, meal code, or task card and we will fill the details automatically."
            heroAction="Open Camera  ->"
            heroColors={["#D4FF6A", "#B8F84F", "#8BD132"]}
            heroIcon={<MaterialCommunityIcons name="qrcode-scan" size={30} color="#091108" />}
            insights={[
                {
                    icon: <Ionicons name="scan-outline" size={20} color="#C8FF63" />,
                    label: "Today's Scans",
                    value: "04",
                    note: "Workout + hydration + meals",
                    accentBackground: "rgba(184,248,79,0.10)",
                    accentText: "#C8FF63",
                },
                {
                    icon: <MaterialCommunityIcons name="history" size={20} color="#8FD7FF" />,
                    label: "Saved Shortcuts",
                    value: "11",
                    note: "Fast recurring templates",
                    accentBackground: "rgba(120,183,255,0.12)",
                    accentText: "#8FD7FF",
                },
            ]}
            summaryTitle="Smart Scan Tips"
            summaryDescription="Keep the code inside the frame and hold still for a second. Bright lighting makes the capture much faster."
            summaryAction="Learn More  ->"
            summaryIcon={<Ionicons name="sparkles-outline" size={24} color="#B8F84F" />}
        />
    );
}
