import { db } from "../db/index.js";
import { category } from "../db/schema.js";
import express from "express"
import type { Request, Response } from "express"
import { and, eq } from "drizzle-orm";
import { Category } from "../utils/zod.js";

export const categoriesRouter = express.Router()

categoriesRouter.post('/add-categories', async (req: Request, res: Response) => {
    try {
       Category.parse(req.body)
        const { title } = req.body;
        const userId = (req as Request & { userId?: { id: string } }).userId?.id;
       await db.insert(category).values({
           title,
           userid: userId ?? ""
       })
        console.log(`User ${userId} created category`)
       return res.status(201).json({
           success: true,
           message:"Category has been Created"
       })
   } catch (error) {
       return res.status(500).json({
           success: false,
           message: "Failed to create category"
       })
   }
})

categoriesRouter.put("/update-categories/:id", async (req: Request, res: Response) => {
    try {
        Category.parse(req.body)
        const { title } = req.body;
        const { id } = req.params
        const userId = (req as Request & { userId?: { id: string } }).userId?.id;
         await db.update(category).set({
            title
         }).where(
             and(
                 eq(category.id, id),
                 eq(category.userid, userId ?? "")
            )
        )
        console.log(`User ${userId} updated category ${id}`)
        return res.status(200).json({
            success: true,
            message:"Edited the category"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update category"
        })
    }
})

categoriesRouter.delete("/delete-categories/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const userId = (req as Request & { userId?: { id: string } }).userId?.id;
        await db.delete(category).where(
            and(
                eq(category.id, id),
                eq(category.userid, userId ?? "")
                
            )
        )
        console.log(`User ${userId} deleted category ${id}`)
        return res.status(200).json({
            success: true,
            message: 'Deleted the category'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete category"
        })
    }
})

categoriesRouter.get("/get-categories/", async (req: Request, res: Response) => {
    try {
        const userId = (req as Request & { userId?: { id: string } }).userId?.id;
         const categories = await db.select().from(category).where(eq(category.userid, userId ?? ""))
        return res.status(200).json({
            success: true,
            categories,
            message: 'fetched the category of user'
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get category"
        })
    }
})