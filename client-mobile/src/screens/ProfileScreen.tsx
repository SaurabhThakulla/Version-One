import React from "react";
import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import AppSectionScreen from "../components/ui/AppSectionScreen";

export default function ProfileScreen() {
    return (
        <AppSectionScreen
            eyebrow="Identity"
            title="Profile"
            description="Personalize your training rhythm, review your badges, and keep your account tuned for consistency."
            heroTitle="Saurabh's Zone"
            heroDescription="Your profile is looking sharp. Update your goals, keep your stats current, and unlock more milestones."
            heroAction="Edit Profile  ->"
            heroColors={["#8FE7FF", "#4ED0FF", "#169BEB"]}
            heroIcon={<Ionicons name="person-circle-outline" size={30} color="#071320" />}
            insights={[
                {
                    icon: <MaterialCommunityIcons name="medal-outline" size={20} color="#C8FF63" />,
                    label: "Badges Earned",
                    value: "14",
                    note: "2 fresh rewards this month",
                    accentBackground: "rgba(184,248,79,0.10)",
                    accentText: "#C8FF63",
                },
                {
                    icon: <Ionicons name="shield-checkmark-outline" size={20} color="#8FD7FF" />,
                    label: "Account Health",
                    value: "Strong",
                    note: "Backups and sync active",
                    accentBackground: "rgba(120,183,255,0.12)",
                    accentText: "#8FD7FF",
                },
            ]}
            summaryTitle="Next Unlock"
            summaryDescription="Keep your streak alive for three more days to unlock the next consistency badge and profile glow."
            summaryAction="View Achievements  ->"
            summaryIcon={<MaterialCommunityIcons name="star-four-points-outline" size={24} color="#8FD7FF" />}
        />
    );
}
