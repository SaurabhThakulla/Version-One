import { db } from "../db/index.js";
import { category, tasks } from "../db/schema.js";
import express from "express"
import type { Request, Response } from "express"
import { and, eq } from "drizzle-orm";
import { EditTask, Task, UpdateTask } from "../utils/zod.js";
import { ZodError } from "zod";

export const TaskRouter = express.Router();

TaskRouter.post("/add-task",async (req: Request, res: Response) => {
    try {
        const parse = Task.parse(req.body)
        const { title, description, categoryId } = parse;
        const userId = req.userId!.id
        const foundCategory = await db
            .select()
            .from(category)
            .where(
                and(
                    eq(category.id, categoryId),
                    eq(category.userid, userId)
                )
            );

        const existingCategory = foundCategory[0];
        if (!existingCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }
         await db.insert(tasks).values({
            title,
            description,
            userId: userId,
            categoryId
        })
        return res.status(201).json({
            success: true,
            message: `${title} has been created`
        })

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Invalid Input"
            })
        }
        return res.status(500).json({
            success: false,
            message: "Failed to create Task"
        })
    }
})


TaskRouter.put("/edit-task/:id", async (req: Request, res: Response) => {
    try {
        const parse = EditTask.parse(req.body)
        const { title, description } = parse
        const { id } = req.params;
        const userId = req.userId!.id;
        await db.update(tasks).set({ title, description }).where(
            and(
                eq(tasks.userId, userId),
                eq(tasks.id, id),
            )
        )
        return res.status(200).json({
            status: true,
            message:"Task updated"
        })
        

    } catch (error) {
        console.error("Failed to edit task:", error)
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Invalid Input"
            })
        }
        return res.status(500).json({
            success: false,
            message: "Failed to edit Task"
        })
    }
})

TaskRouter.put("/update-task/:id", async (req: Request, res: Response) => {
    try {
        const parse = UpdateTask.parse(req.body)
        const { status } = parse;
        const { id } = req.params;
        const userId = req.userId!.id;
        await db.update(tasks).set({status}).where(
            and(
                eq(tasks.userId, userId),
                eq(tasks.id, id)
            )
        )
        return res.status(200).json({
            status: true,
            message: "Task Completed"
        })


    } catch (error) {
        console.error("Failed to update task:", error)
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Invalid Input"
            })
        }
        return res.status(500).json({
            success: false,
            message: "Failed to update task "
        })
    }
})

TaskRouter.delete("/delete-task/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = req.userId!.id;

        await db.delete(tasks).where(
            and(
                eq(tasks.userId, userId),
                eq(tasks.id, id)
            )
        )

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        })

    } catch (error) {
        console.error("Failed to delete task:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to delete task"
        })
    }
})