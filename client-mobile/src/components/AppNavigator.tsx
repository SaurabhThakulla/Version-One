import { createNativeStackNavigator }
    from "@react-navigation/native-stack";

import MainShell from "./MainShell";
import PreSignupScreen from "../screens/PreSignupScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { RootStackParamList } from "../types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppNavigatorProps = {
    token: string | null;
};

export default function AppNavigator({ token }: AppNavigatorProps) {
    return (
        <Stack.Navigator
            initialRouteName={token ? "Main" : "PreSignup"}
            screenOptions={{
                headerShown: false,
            }}
        >
            {token ? (
                <Stack.Screen
                    name="Main"
                    component={MainShell}
                />
            ) : (
                <>
                    <Stack.Screen
                        name="PreSignup"
                        component={PreSignupScreen}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                    />
                </>
            )}
        </Stack.Navigator>
    );
}
