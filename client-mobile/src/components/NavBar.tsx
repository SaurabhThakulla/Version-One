import React from "react";
import {
    Pressable,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import { styles } from "../styling/Page/BottomNavbarStyles";
import { MainTabKey } from "../types/types";

type BottomNavbarProps = {
    activeTab: MainTabKey;
    onTabPress: (tab: MainTabKey) => void;
};

type NavItem = {
    key: MainTabKey;
    label: string;
    renderIcon: (active: boolean) => React.ReactNode;
    center?: boolean;
};

const navItems: NavItem[] = [
    {
        key: "Home",
        label: "Home",
        renderIcon: (active) => (
            <Ionicons
                name={active ? "home" : "home-outline"}
                size={20}
                color={active ? "#C8FF63" : "#8C97B2"}
            />
        ),
    },
    {
        key: "Progress",
        label: "Progress",
        renderIcon: (active) => (
            <MaterialCommunityIcons
                name={active ? "chart-box" : "chart-box-outline"}
                size={21}
                color={active ? "#8FD7FF" : "#8C97B2"}
            />
        ),
    },
    {
        key: "Scan",
        label: "Scan",
        center: true,
        renderIcon: () => (
            <MaterialCommunityIcons
                name="qrcode-scan"
                size={28}
                color="#0A1206"
            />
        ),
    },
    {
        key: "Tasks",
        label: "Tasks",
        renderIcon: (active) => (
            <Ionicons
                name={active ? "grid" : "grid-outline"}
                size={20}
                color={active ? "#C8FF63" : "#8C97B2"}
            />
        ),
    },
    {
        key: "Profile",
        label: "Profile",
        renderIcon: (active) => (
            <Ionicons
                name={active ? "person-circle" : "person-circle-outline"}
                size={22}
                color={active ? "#C8FF63" : "#8C97B2"}
            />
        ),
    },
];

export default function BottomNavbar({
    activeTab,
    onTabPress,
}: BottomNavbarProps) {
    const insets = useSafeAreaInsets();

    return (
        <View
            pointerEvents="box-none"
            style={[
                styles.wrapper,
                { paddingBottom: Math.max(insets.bottom, 12) },
            ]}
        >
            <View style={styles.row}>
                {navItems.map((item) => {
                    const isActive = activeTab === item.key;

                    if (item.center) {
                        return (
                            <Pressable
                                key={item.key}
                                style={styles.centerSlot}
                                onPress={() => onTabPress(item.key)}
                            >
                                <View style={styles.centerGlow} />
                                <View style={styles.centerButton}>
                                    {item.renderIcon(true)}
                                </View>
                            </Pressable>
                        );
                    }

                    return (
                        <Pressable
                            key={item.key}
                            style={styles.navItem}
                            onPress={() => onTabPress(item.key)}
                        >
                            <View style={isActive ? styles.activeIconWrap : styles.iconWrap}>
                                {item.renderIcon(isActive)}
                            </View>

                            <Text style={isActive ? styles.activeText : styles.inactiveText}>
                                {item.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}
