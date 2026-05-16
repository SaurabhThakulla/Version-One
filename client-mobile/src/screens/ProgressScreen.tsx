import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from "react-native";

import {
    Ionicons,
    Feather,
} from "@expo/vector-icons";

import CreateActionCard from "../components/ui/CreateActionCard";
import { styles } from "../styling/Page/postsStyles";

export default function ProgressScreen() {
    const posts = [
        {
            id: 1,
            user: "Alex Carter",
            time: "2h ago",
            votes: 128,
            title: "How do I increase bench press strength fast?",
            description:
                "I've been stuck at 70kg for almost 2 months. What exercises helped improve your bench?",
            tag: "WORKOUT",
        },
        {
            id: 2,
            user: "Sophie Lee",
            time: "5h ago",
            votes: 94,
            title: "Best cheap protein foods for students?",
            description:
                "Need affordable protein options besides whey.",
            tag: "DIET",
        },
        {
            id: 3,
            user: "Ryan Cooper",
            time: "1h ago",
            votes: 212,
            title: "Best exercises for wider shoulders?",
            description:
                "Trying to build broader shoulders naturally. Which exercises worked best for you?",
            tag: "WORKOUT",
        },
        {
            id: 4,
            user: "Emma Wilson",
            time: "3h ago",
            votes: 76,
            title: "How do you stay consistent with workouts?",
            description:
                "I stay motivated for 1 week then completely lose discipline.",
            tag: "MINDSET",
        },
        {
            id: 5,
            user: "Noah Martinez",
            time: "6h ago",
            votes: 143,
            title: "Best pre-workout meal ideas?",
            description:
                "Need meals that give energy without feeling too heavy during training.",
            tag: "DIET",
        },
        {
            id: 6,
            user: "Liam Johnson",
            time: "7h ago",
            votes: 188,
            title: "Push Pull Legs vs Arnold Split?",
            description:
                "Which workout split gave you the best muscle growth results?",
            tag: "WORKOUT",
        },
        {
            id: 7,
            user: "Ava Thompson",
            time: "9h ago",
            votes: 67,
            title: "How much water do you drink daily?",
            description:
                "Trying to improve hydration habits during workouts and classes.",
            tag: "HEALTH",
        },
        {
            id: 8,
            user: "Daniel Kim",
            time: "11h ago",
            votes: 231,
            title: "Best home workout without equipment?",
            description:
                "Can't afford a gym right now. Need intense bodyweight routines.",
            tag: "HOME",
        },
        {
            id: 9,
            user: "Sophia Brown",
            time: "13h ago",
            votes: 84,
            title: "Is creatine worth taking for beginners?",
            description:
                "Thinking about starting creatine. Any side effects or tips?",
            tag: "SUPPLEMENTS",
        },
        {
            id: 10,
            user: "Ethan Walker",
            time: "15h ago",
            votes: 155,
            title: "How long did it take to see abs?",
            description:
                "Been training for 4 months with diet control but still no visible abs.",
            tag: "TRANSFORMATION",
        },
    ];

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
        >
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.logoRow}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>FC</Text>
                    </View>

                    <View>
                        <Text style={styles.smallText}>
                            FITNESS SOCIAL COMMUNITY
                        </Text>

                        <Text style={styles.brand}>FITCORE</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.notificationBtn}>
                    <Ionicons
                        name="notifications-outline"
                        size={22}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

            {/* SEARCH */}
            <View style={styles.searchContainer}>
                <Ionicons
                    name="search-outline"
                    size={20}
                    color="#7B7B93"
                />

                <TextInput
                    placeholder="Search workouts, diets, discussions..."
                    placeholderTextColor="#6E6E84"
                    style={styles.searchInput}
                />
            </View>

            <CreateActionCard
                title="Add Post"
                description="Share workout progress, meal wins, questions, or fitness updates with the FitCore community."
                iconName="message-plus-outline"
                buttonText="Create Post"
                eyebrow="Community Post"
                helperText="Photos, progress, questions"
                accentColor="#8FD7FF"
            />

            {/* HOT POSTS */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>HOT POSTS</Text>

                <View style={styles.trendingBadge}>
                    <Text style={styles.trendingText}>Trending Now</Text>
                </View>
            </View>

            {/* POSTS */}
            {posts.map((post) => (
                <View key={post.id} style={styles.postCard}>
                    {/* VOTE */}
                    <View style={styles.voteContainer}>
                        <TouchableOpacity style={styles.voteBtn}>
                            <Feather
                                name="chevron-up"
                                size={18}
                                color="#fff"
                            />
                        </TouchableOpacity>

                        <Text style={styles.voteCount}>
                            {post.votes}
                        </Text>

                        <TouchableOpacity style={styles.voteBtn}>
                            <Feather
                                name="chevron-down"
                                size={18}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* CONTENT */}
                    <View style={styles.postContent}>
                        <View style={styles.postHeader}>
                            <View style={styles.userRow}>
                                <View style={styles.smallAvatar}>
                                    <Text style={styles.smallAvatarText}>
                                        {post.user[0]}
                                    </Text>
                                </View>

                                <View>
                                    <Text style={styles.username}>
                                        {post.user}
                                    </Text>

                                    <Text style={styles.time}>
                                        {post.time}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.tag}>
                                <Text style={styles.tagText}>
                                    {post.tag}
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.postTitle}>
                            {post.title}
                        </Text>

                        <Text style={styles.postDescription}>
                            {post.description}
                        </Text>

                        <View style={styles.bottomActions}>
                            <TouchableOpacity style={styles.commentBtn}>
                                <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={18}
                                    color="#C8FF4D"
                                />

                                <Text style={styles.commentText}>
                                    42 Comments
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}
