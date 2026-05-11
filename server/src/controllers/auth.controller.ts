import { db } from "../db/index.js"
import type { Request, Response } from "express";
import { users } from "../db/schema.js"
import { eq } from "drizzle-orm";
import { loginSchema, signupSchema } from "../utils/zod.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const signup = async (req: Request, res: Response) => {
    try {
        signupSchema.parse(req.body)
        const { username, email, password } = req.body
        const normalizedEmail = email.trim().toLowerCase();
        const search = await db.select().from(users).where(eq(users.email, normalizedEmail));
        const foundUser = search[0];
        const hashpassword = await bcrypt.hash(password, 10);
        if (foundUser) {
            return res.status(409).json({
                success: false,
                message: 'failed to create the user'
            })
        }
        const newUser = await db.insert(users).values({
               username,
               email: normalizedEmail,
               password: hashpassword,
           }).returning()
        const user = newUser[0];

        if (!user) {
            return res.status(500).json({ success: false, message: 'failed to create the user' })
        }
        
        const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET as string)
           return  res.status(201).json({
               success: true,
               token,
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
        if (!founduser) {
            return res.status(401).json({
                success: false,
                message: "Email or password is wrong"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, founduser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Email or password is wrong"
            })
        }
        const token = jwt.sign({email, id: founduser.id},process.env.JWT_SECRET as string)
        return res.status(200).json({
            success: true,
            token,
            message: "Login successful"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Failed to login"
        })
    }
}