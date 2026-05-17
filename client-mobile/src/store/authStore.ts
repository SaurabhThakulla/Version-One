import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

const TOKEN_KEY = "auth_token";

type AuthState = {
	token: string | null;
	isHydrated: boolean;
	setToken: (token: string) => Promise<void>;
	hydrateToken: () => Promise<void>;
	clearToken: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
	token: null,
	isHydrated: false,
	setToken: async (token) => {
		await SecureStore.setItemAsync(TOKEN_KEY, token);
		set({ token, isHydrated: true });
	},
	hydrateToken: async () => {
		const token = await SecureStore.getItemAsync(TOKEN_KEY);
		set({ token, isHydrated: true });
	},
	clearToken: async () => {
		await SecureStore.deleteItemAsync(TOKEN_KEY);
		set({ token: null, isHydrated: true });
	},
}));
