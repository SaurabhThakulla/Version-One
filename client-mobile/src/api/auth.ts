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


export const login = async (data: { email: string; password: string }) => {
	const response = await api.post("/login", data);  
	return response.data;
};

export const signup = async (data: { username: string; email: string; password: string }) => {
	const response = await api.post("/signup", data);  
	return response.data;
};