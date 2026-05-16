declare module "*.css";

export type MainTabKey =
    | "Home"
    | "Progress"
    | "Scan"
    | "Tasks"
    | "Profile";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Main:
    | {
        initialTab?: MainTabKey;
    }
    | undefined;
};
