import axios from "axios";
import { Platform } from "react-native";

const fallbackBaseUrl = Platform.OS === "android"
	? "http://10.0.2.2:4000"
	: "http://localhost:4000";

const api = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL?.trim() || fallbackBaseUrl,
	headers: {
		"Content-Type": "application/json",
	}, timeout: 10000,
});

export default api;
