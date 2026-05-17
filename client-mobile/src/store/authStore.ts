import * as SecureStore from "expo-secure-store";
import { create } from "zustand";

const TOKEN_KEY = process.env.EXPO_PUBLIC_TOKEN_KEY?.trim() || "auth_token";

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
		try {
			await SecureStore.setItemAsync(TOKEN_KEY, token);
		} catch (err) {
			// Fail gracefully — still update in-memory state so UI can proceed.
			// eslint-disable-next-line no-console
			console.warn("SecureStore.setItemAsync failed:", err);
		} finally {
			set({ token, isHydrated: true });
		}
	},
	hydrateToken: async () => {
		try {
			const token = await SecureStore.getItemAsync(TOKEN_KEY);
			set({ token, isHydrated: true });
		} catch (err) {
			// If SecureStore fails or hangs, ensure app still becomes ready.
			// eslint-disable-next-line no-console
			console.warn("SecureStore.getItemAsync failed:", err);
			set({ token: null, isHydrated: true });
		}
	},
	clearToken: async () => {
		try {
			await SecureStore.deleteItemAsync(TOKEN_KEY);
		} catch (err) {
			// eslint-disable-next-line no-console
			console.warn("SecureStore.deleteItemAsync failed:", err);
		} finally {
			set({ token: null, isHydrated: true });
		}
	},
}));
