import { db } from "../db/index.js"
import type { Request, Response } from "express";
import { users } from "../db/schema.js"
import { eq } from "drizzle-orm";
import { loginSchema, signupSchema } from "../utils/zod.js";

export const signup = async (req: Request, res: Response) => {
    try {
        signupSchema.parse(req.body)
        const { username, email, password } = req.body
        const normalizedEmail = email.trim().toLowerCase();
        const search = await db.select().from(users).where(eq(users.email, normalizedEmail));
        const foundUser = search[0];
        if (foundUser) {
            return res.status(409).json({
                success: false,
                message: 'failed to create the user'
            })
        }
           await db.insert(users).values({
               username,
               email: normalizedEmail,
               password,
           })
           return  res.status(201).json({
               success: true,
               message: `${username} has been created`
           })
       } catch (error) {
           return res.status(500).json({
               success: false,
               message: 'failed to create the user'
        })
       }
}

export const login = async (req: Request, res: Response) => {
    try {
        loginSchema.parse(req.body)
        const { email, password } = req.body;
        const normalizedEmail = email.trim().toLowerCase();
        const user = await db.select().from(users).where(eq(users.email, normalizedEmail));
        const founduser = user[0];
        if (founduser) {
            if (founduser.password === password) {
                return res.status(200).json({
                    success: true,
                    message:"Login Sucessfull"
                })
            }
            else {
                return res.status(401).json({
                    success: false,
                    message: "Email or password is wrong"
                })
            }
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Something Went Wrong"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Failed to login"
        })
    }
}