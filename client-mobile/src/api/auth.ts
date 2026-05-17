import api from "./axios";

export type SignupPayload = {
	username: string;
	email: string;
	password: string;
};

export type LoginPayload = {
	email: string;
	password: string;
};

export type AuthResponse = {
	success: boolean;
	message: string;
	token?: string;
};

export const signup = async (payload: SignupPayload) => {
	const response = await api.post<AuthResponse>("/signup", payload);
	return response.data;
};

export const login = async (payload: LoginPayload) => {
	const response = await api.post<AuthResponse>("/login", payload);
	return response.data;
};
