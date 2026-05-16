import React, { ReactNode, useEffect, useRef } from "react";
import {
    Animated,
    Platform,
    ScrollViewProps,
    StyleProp,
    ViewStyle,
} from "react-native";

type SmoothScrollViewProps = ScrollViewProps & {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    withEntranceAnimation?: boolean;
};

const DEFAULT_DECELERATION_RATE =
    Platform.OS === "ios"
        ? 0.992
        : 0.985;

export default function SmoothScrollView({
    children,
    style,
    withEntranceAnimation = true,
    showsVerticalScrollIndicator = false,
    scrollEventThrottle = 16,
    decelerationRate = DEFAULT_DECELERATION_RATE,
    keyboardDismissMode = "on-drag",
    overScrollMode = "never",
    bounces = false,
    alwaysBounceVertical = false,
    contentInsetAdjustmentBehavior = "automatic",
    ...props
}: SmoothScrollViewProps) {
    const entranceProgress = useRef(new Animated.Value(withEntranceAnimation ? 0 : 1)).current;

    useEffect(() => {
        if (!withEntranceAnimation) {
            return;
        }

        Animated.spring(entranceProgress, {
            toValue: 1,
            damping: 18,
            mass: 0.9,
            stiffness: 150,
            useNativeDriver: true,
        }).start();
    }, [entranceProgress, withEntranceAnimation]);

    const animatedStyle = {
        opacity: entranceProgress,
        transform: [
            {
                translateY: entranceProgress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [14, 0],
                }),
            },
        ],
    };

    return (
        <Animated.ScrollView
            {...props}
            style={[animatedStyle, style]}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            scrollEventThrottle={scrollEventThrottle}
            decelerationRate={decelerationRate}
            keyboardDismissMode={keyboardDismissMode}
            overScrollMode={overScrollMode}
            bounces={bounces}
            alwaysBounceVertical={alwaysBounceVertical}
            contentInsetAdjustmentBehavior={contentInsetAdjustmentBehavior}
        >
            {children}
        </Animated.ScrollView>
    );
}
