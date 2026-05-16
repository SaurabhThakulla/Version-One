// ProfileScreen.js

import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { styles } from "../styling/Page/profileStyles";

export default function ProfileScreen() {
    const [currentMonth, setCurrentMonth] = useState("May 2026");

    const achievements = [
        {
            icon: "🔥",
            title: "Consistency Master",
            text: "You're on a 5 day streak",
            value: "+60 XP",
        },
        {
            icon: "🎯",
            title: "Focus Builder",
            text: "7 days already planned ahead",
            value: "+40 XP",
        },
        {
            icon: "👑",
            title: "Category Leader",
            text: "Workout is dominating",
            value: "80%",
        },
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const generateBoxes = () => {
        return Array.from({ length: 42 }).map((_, index) => {
            const level = Math.floor(Math.random() * 5);

            return (
                <View
                    key={index}
                    style={[
                        styles.commitBox,
                        level === 0 && styles.level0,
                        level === 1 && styles.level1,
                        level === 2 && styles.level2,
                        level === 3 && styles.level3,
                        level === 4 && styles.level4,
                    ]}
                />
            );
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                {/* TOPBAR */}
                <View style={styles.topbar}>
                    <View style={styles.brand}>
                        <View style={styles.logo} />

                        <View>
                            <Text style={styles.brandSmall}>
                                FitCore account
                            </Text>

                            <Text style={styles.brandTitle}>
                                Profile center
                            </Text>
                        </View>
                    </View>

                    <View style={styles.topbarActions}>
                        <TouchableOpacity style={styles.iconBtn}>
                            <Text style={styles.iconText}>!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconBtn}>
                            <Text style={styles.iconText}>⚙</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* HERO */}
                <View style={[styles.card, styles.hero]}>
                    <Text style={styles.eyebrow}>
                        MEMBER PROFILE
                    </Text>

                    <View style={styles.profileMain}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>AK</Text>
                        </View>

                        <View>
                            <Text style={styles.name}>
                                Alex Kim
                            </Text>

                            <View style={styles.badges}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>
                                        Level 7
                                    </Text>
                                </View>

                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>
                                        5 day streak
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.taskDone}>
                                2 tasks done
                            </Text>
                        </View>
                    </View>
                </View>

                {/* MINI GRID */}
                <View style={styles.miniGrid}>
                    <View style={[styles.card, styles.miniCard]}>
                        <Text style={styles.cardLabel}>
                            MONTHLY GOAL
                        </Text>

                        <Text style={styles.cardValue}>
                            70%
                        </Text>

                        <View style={styles.progress}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: "70%" },
                                ]}
                            />
                        </View>
                    </View>

                    <View style={[styles.card, styles.miniCard]}>
                        <Text style={styles.cardLabel}>
                            ACTIVE CATEGORIES
                        </Text>

                        <Text style={styles.cardValue}>
                            4
                        </Text>

                        <Text style={styles.subText}>
                            areas with planned tasks
                        </Text>
                    </View>
                </View>

                {/* COMMIT GRAPH */}
                <View style={[styles.card, styles.commitCard]}>
                    <View style={styles.commitHeader}>
                        <Text style={styles.commitTitle}>
                            Task Completions
                        </Text>

                        <Text style={styles.commitMonth}>
                            {currentMonth}
                        </Text>
                    </View>

                    <View style={styles.commitContainer}>
                        <View style={styles.daysColumn}>
                            {days.map((day) => (
                                <Text
                                    key={day}
                                    style={styles.dayLabel}
                                >
                                    {day}
                                </Text>
                            ))}
                        </View>

                        <View style={styles.grid}>
                            {generateBoxes()}
                        </View>
                    </View>

                    <View style={styles.monthNav}>
                        <TouchableOpacity style={styles.monthBtn}>
                            <Text style={styles.monthBtnText}>
                                ◀
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.monthBtn}>
                            <Text style={styles.monthBtnText}>
                                ▶
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ACHIEVEMENTS */}
                <View style={[styles.card, styles.achievements]}>
                    <View style={styles.sectionHead}>
                        <Text style={styles.sectionTitle}>
                            Recent Achievements
                        </Text>

                        <Text style={styles.sectionSub}>
                            Momentum rewards
                        </Text>
                    </View>

                    {achievements.map((item, index) => (
                        <View
                            key={index}
                            style={styles.achItem}
                        >
                            <View style={styles.achLeft}>
                                <View style={styles.achIcon}>
                                    <Text>{item.icon}</Text>
                                </View>

                                <View>
                                    <Text style={styles.achTitle}>
                                        {item.title}
                                    </Text>

                                    <Text style={styles.achText}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.achValue}>
                                <Text style={styles.achValueText}>
                                    {item.value}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* BOTTOM NAV */}
            <View style={styles.bottomNav}>
                <TouchableOpacity>
                    <Text style={styles.navText}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.navText}>
                        Progress
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.fab}>
                    <Text style={styles.fabText}>
                        +
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.navText}>
                        Tasks
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text
                        style={[
                            styles.navText,
                            styles.activeNav,
                        ]}
                    >
                        Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}