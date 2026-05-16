declare module "*.css";

export type MainTabKey =
    | "Home"
    | "Progress"
    | "Scan"
    | "category"
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
