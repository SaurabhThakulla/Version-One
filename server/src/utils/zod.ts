import { z } from "zod"

export const signupSchema = z.object({
    username: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(8) 
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export const Category = z.object({
    title:z.string().trim().min(2).max(20)
})

export const Task = z.object({
    title: z.string().trim().min(2).max(20),
    description:z.string().trim().min(2).max(50)
})
export const EditTask = z.object({
    title: z.string().trim().min(2).max(20),
    description: z.string().trim().min(2).max(50),
})
export const UpdateTask = z.object({
    status:z.boolean()
})