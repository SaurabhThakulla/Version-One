declare module "*.css";

export type MainTabKey =
    | "Home"
    | "Scan"
    | "category"
    | "Posts"
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
