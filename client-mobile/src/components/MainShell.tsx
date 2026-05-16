import React, { useState } from "react";
import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScanScreen from "../screens/ScanScreen";
import PostsScreen from "../screens/PostsScreen";
import CategoriesScreen from "../screens/CategoryScreen"
import BottomNavbar from "./NavBar";
import { MainTabKey, RootStackParamList } from "../types/types";

type MainRouteProp = RouteProp<RootStackParamList, "Main">;

export default function MainShell() {
    const route = useRoute<MainRouteProp>();
    const [activeTab, setActiveTab] = useState<MainTabKey>(
        route.params?.initialTab ?? "Home"
    );

    const renderActiveScreen = () => {
        switch (activeTab) {
            case "Scan":
                return <ScanScreen />;
            case "Posts":
                return <PostsScreen />;
            case "category":
                return <CategoriesScreen />;
            case "Profile":
                return <ProfileScreen />;
            case "Home":
            default:
                return <HomeScreen />;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#050A14" }}>
            <View style={{ flex: 1 }}>
                {renderActiveScreen()}
            </View>

            <BottomNavbar
                activeTab={activeTab}
                onTabPress={setActiveTab}
            />
        </View>
    );
}
