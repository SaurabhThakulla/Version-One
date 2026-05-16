import { ReactNode } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

type Props = {
    children: ReactNode;
};

export default function ScreenWrapper({
    children,
}: Props) {
    return (
        <LinearGradient
            colors={[
                "#020617",
                "#0F172A",
                "#1E293B",
                "#0F172A",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                }}
            >
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
}