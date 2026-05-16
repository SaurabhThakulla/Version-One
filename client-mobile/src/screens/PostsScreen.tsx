import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CreateActionCard from "../components/ui/CreateActionCard";
import SmoothScrollView from "../components/ui/SmoothScrollView";
import { styles } from "../styling/Page/feedStyles";

const posts = [
    {
        id: 1,
        author: "Alex Carter",
        time: "2h ago",
        tag: "Workout",
        title: "How do I increase bench press strength fast?",
        desc: "I've been stuck at 70kg for almost 2 months.",
        votes: 128,
        comments: 42,
        avatar: "A",
        color: "#C8F53B",
    },
    {
        id: 2,
        author: "Sophie Lee",
        time: "5h ago",
        tag: "Diet",
        title: "Best cheap protein foods for students?",
        desc: "Need affordable protein options besides whey.",
        votes: 94,
        comments: 38,
        avatar: "S",
        color: "#5B8AFF",
    },
];

export default function FeedScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <SmoothScrollView
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <View style={styles.logoBox}>
                            <Text style={styles.logoText}>FC</Text>
                        </View>

                        <View>
                            <Text style={styles.communityText}>
                                Fitness Social Community
                            </Text>

                            <Text style={styles.appTitle}>
                                FitCore
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.notificationButton}>
                        <Ionicons
                            name="notifications-outline"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchWrapper}>
                    <View style={styles.searchBox}>
                        <Ionicons
                            name="search"
                            size={18}
                            color="#8C8CA1"
                        />

                        <TextInput
                            placeholder="Search workouts, diets, discussions..."
                            placeholderTextColor="#8C8CA1"
                            style={styles.searchInput}
                        />
                    </View>
                </View>

                <View style={styles.createActionWrap}>
                    <CreateActionCard
                        title="Add Post"
                        description="Share workout progress, questions, meals, and milestone updates from one reusable action card."
                        iconName="message-plus-outline"
                        buttonText="Create Post"
                        eyebrow="Community Post"
                        helperText="Photos, progress, questions"
                        accentColor="#C8FF4D"
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Hot Posts
                    </Text>

                    <View style={styles.trendingBadge}>
                        <Text style={styles.trendingText}>
                            Trending Now
                        </Text>
                    </View>
                </View>

                <View style={styles.postsWrapper}>
                    {posts.map((post) => (
                        <View
                            key={post.id}
                            style={styles.postCard}
                        >
                            <View style={styles.voteSection}>
                                <TouchableOpacity style={styles.voteButton}>
                                    <Ionicons
                                        name="chevron-up"
                                        size={18}
                                        color="white"
                                    />
                                </TouchableOpacity>

                                <Text style={styles.voteCount}>
                                    {post.votes}
                                </Text>

                                <TouchableOpacity style={styles.voteButton}>
                                    <Ionicons
                                        name="chevron-down"
                                        size={18}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.postContent}>
                                <View style={styles.postMeta}>
                                    <View style={styles.postAuthor}>
                                        <View
                                            style={[
                                                styles.avatarBox,
                                                {
                                                    backgroundColor:
                                                        post.color,
                                                },
                                            ]}
                                        >
                                            <Text style={styles.avatarText}>
                                                {post.avatar}
                                            </Text>
                                        </View>

                                        <View>
                                            <Text style={styles.authorName}>
                                                {post.author}
                                            </Text>

                                            <Text style={styles.postTime}>
                                                {post.time}
                                            </Text>
                                        </View>
                                    </View>

                                    <View
                                        style={[
                                            styles.tagBadge,
                                            {
                                                backgroundColor:
                                                    post.tag === "Workout"
                                                        ? "rgba(200,245,59,0.1)"
                                                        : "rgba(91,138,255,0.1)",
                                            },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.tagText,
                                                {
                                                    color:
                                                        post.tag === "Workout"
                                                            ? "#C8F53B"
                                                            : "#5B8AFF",
                                                },
                                            ]}
                                        >
                                            {post.tag}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={styles.postTitle}>
                                    {post.title}
                                </Text>

                                <Text style={styles.postDescription}>
                                    {post.desc}
                                </Text>

                                <View style={styles.postActionsBottom}>
                                    <TouchableOpacity>
                                        <Text style={styles.bottomActionText}>
                                            Comments {post.comments}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Text style={styles.bottomActionText}>
                                            Share
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </SmoothScrollView>
        </SafeAreaView>
    );
}
