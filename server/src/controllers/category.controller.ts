import { db } from "../db/index.js";
import { category } from "../db/schema.js";
import express from "express"
import type { Request, Response } from "express"

export const categoriesRouter = express.Router()

categoriesRouter.post('/categories', async (req: Request, res: Response) => {
   try {
       const { title, userid } = req.body
       await db.insert(category).values({
           title,
           userid
       })
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