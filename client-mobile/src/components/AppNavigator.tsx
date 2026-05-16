import { createNativeStackNavigator }
    from "@react-navigation/native-stack";

import MainShell from "./MainShell";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { RootStackParamList } from "../types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Main"
                component={MainShell}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
}
