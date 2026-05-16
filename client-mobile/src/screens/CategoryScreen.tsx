import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { styles } from "../styling/Page/categoryStyles";
import { Ionicons } from "@expo/vector-icons";
import CreateActionCard from "../components/ui/CreateActionCard";

const categories = [
    {
        id: 1,
        title: "Workout",
        short: "WO",
        description:
            "Strength blocks for push, pull, and leg days.",
        tasks: "15 tasks",
        completed: 4,
        left: 11,
        color: "#C8FF4D",
        progress: "35%",
    },
    {
        id: 2,
        title: "Habits",
        short: "HB",
        description:
            "Small wins that stack up through the week.",
        tasks: "5 tasks",
        completed: 5,
        left: 0,
        color: "#79A8FF",
        progress: "100%",
    },
    {
        id: 3,
        title: "Diet",
        short: "DT",
        description:
            "Meals and nutrition checkpoints for the day.",
        tasks: "5 tasks",
        completed: 0,
        left: 5,
        color: "#FF9B6A",
        progress: "0%",
    },
];

export default function categoriesScreen() {

    const handleCreateCategory = (title: string, description: string) => {
        if (!title.trim()) {
            Alert.alert("Error", "Please enter a category title");
            return Promise.resolve();
        }

        return new Promise<void>((resolve) => {
            setTimeout(() => {
                Alert.alert(
                    "Success",
                    description.trim()
                        ? `Category "${title}" created with description.`
                        : `Category "${title}" created!`
                );
                resolve();
            }, 1000);
        });
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 120,
            }}
        >
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>
                            FC
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.smallText}>
                            FitCore planner
                        </Text>

                        <Text style={styles.title}>
                            Daily category flow
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.notificationBtn}
                    onPress={() => Alert.alert("Notifications", "You have no new notifications")}
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="notifications-outline"
                        size={18}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

            {/* STATS */}
            <View style={styles.statsRow}>
                <View style={styles.statCard}>
                    <Text style={styles.statLabel}>
                        TOTAL
                    </Text>

                    <Text style={styles.statValue}>
                        0
                    </Text>

                    <Text style={styles.statNote}>
                        categories queued
                    </Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statLabel}>
                        DONE
                    </Text>

                    <Text style={styles.statValue}>
                        0
                    </Text>

                    <Text style={styles.statNote}>
                        completed today
                    </Text>
                </View>

                <View style={styles.statCard}>
                    <Text style={styles.statLabel}>
                        ACTIVE
                    </Text>

                    <Text style={styles.statValue}>
                        0
                    </Text>

                    <Text style={styles.statNote}>
                        categories live
                    </Text>
                </View>
            </View>
            {/* CATEGORY HEADER */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    CATEGORIES
                </Text>
            </View>

            {/* CREATE ACTION CARD */}
            <CreateActionCard
                title="Add Category"
                description="Create and organize workout, diet, and habit categories from one reusable action card."
                iconName="view-grid-plus-outline"
                buttonText="Create Category"
                eyebrow="Category Tools"
                helperText="Workout, diet, habits"
                accentColor="#C8FF4D"
                onCreate={handleCreateCategory}
            />
    
            {/* CATEGORY LIST */}
            {categories.map((item) => (
                <View
                    key={item.id}
                    style={styles.categoryCard}
                >
                    <View style={styles.categoryTop}>
                        <View
                            style={[
                                styles.categoryIcon,
                                {
                                    backgroundColor:
                                        item.color,
                                },
                            ]}
                        >
                            <Text
                                style={
                                    styles.categoryIconText
                                }
                            >
                                {item.short}
                            </Text>
                        </View>

                        <View
                            style={
                                styles.categoryContent
                            }
                        >
                            <Text
                                style={
                                    styles.categoryTitle
                                }
                            >
                                {item.title}
                            </Text>

                            <Text
                                style={
                                    styles.categoryDescription
                                }
                            >
                                {item.description}
                            </Text>
                        </View>

                        <View style={styles.taskBadge}>
                            <Text
                                style={
                                    styles.taskBadgeText
                                }
                            >
                                {item.tasks}
                            </Text>
                        </View>
                    </View>

                    {/* PROGRESS */}
                    <View style={styles.progressBar}>
                        <View
                            style={[
                                styles.progressFill,
                                {
                                    width: typeof item.progress === 'string' ? parseFloat(item.progress) : item.progress,
                                    backgroundColor:
                                        item.color,
                                },
                            ]}
                        />
                    </View>

                    <View style={styles.progressBottom}>
                        <Text
                            style={styles.progressText}
                        >
                            {item.completed} completed
                        </Text>

                        <Text
                            style={styles.progressText}
                        >
                            {item.left} left
                        </Text>
                    </View>
                </View>
            ))}

            
        </ScrollView>
    );
}
 
