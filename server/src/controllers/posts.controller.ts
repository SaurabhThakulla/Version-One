import { db } from "../db/index.js";
import express from "express"
import type { Request, Response } from "express"
import { and, eq } from "drizzle-orm";
import { ZodError } from "zod";
import { Posts } from "../utils/zod.js";
import { posts } from "../db/schema.js";

export const PostsRouter = express.Router();

PostsRouter.post("/add-post", async (req: Request, res: Response) => {
    try {
        const parse = Posts.parse(req.body)
        const { title, description } = parse;
        const userId = req.userId!.id;

        const existing = await db.select().from(posts).where(and(
            eq(posts.title, title),
            eq(posts.userId, userId)
        ));

        if (existing.length > 0) {
            return res.status(409).json({
                success: false,
                message: "Post already exist"
            });
        }

        await db.insert(posts).values({
            title,
            userId,
            description
        });

        console.log(`User ${userId} created post`);
        return res.status(201).json({
            success: true,
            message: "Post has been created"
        });

    } catch (error) {
        console.error("Failed to create post:", error)
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Invalid Input"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to create post"
        });
    }
})


PostsRouter.put("/edit-post/:id", async (req: Request, res: Response) => {
    try {
        const parse = Posts.parse(req.body);
        const { title, description } = parse;
        const { id } = req.params;
        const userId = req.userId!.id;

        if (typeof id !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid post id"
            });
        }

        const existingPost = await db.select().from(posts).where(and(
            eq(posts.id, id),
            eq(posts.userId, userId)
        ));

        if (existingPost.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        const duplicateTitle = await db.select().from(posts).where(and(
            eq(posts.title, title),
            eq(posts.userId, userId)
        ));

        if (duplicateTitle.some((post) => post.id !== id)) {
            return res.status(409).json({
                success: false,
                message: "Post already exist"
            });
        }

        await db.update(posts).set({ title, description }).where(and(
            eq(posts.id, id),
            eq(posts.userId, userId)
        ));

        console.log(`User ${userId} updated post ${id}`);
        return res.status(200).json({
            success: true,
            message: "Post updated"
        });

    } catch (error) {
        console.error("Failed to edit post:", error)
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: "Invalid Input"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to edit post"
        });
    }
})

PostsRouter.get("/get-posts", async (req: Request, res: Response) => {
    try {
        const userId = req.userId!.id;
        const postList = await db.select().from(posts).where(eq(posts.userId, userId));

        return res.status(200).json({
            success: true,
            posts: postList,
            message: "Fetched posts"
        });

    } catch (error) {
        console.error("Failed to fetch posts:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to fetch posts"
        });
    }
})

PostsRouter.delete("/delete-post/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = req.userId!.id;

        if (typeof id !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid post id"
            });
        }

        const existingPost = await db.select().from(posts).where(and(
            eq(posts.id, id),
            eq(posts.userId, userId)
        ));

        if (existingPost.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        await db.delete(posts).where(and(
            eq(posts.id, id),
            eq(posts.userId, userId)
        ));

        console.log(`User ${userId} deleted post ${id}`);
        return res.status(200).json({
            success: true,
            message: "Post deleted successfully"
        });

    } catch (error) {
        console.error("Failed to delete post:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to delete post"
        });
    }
})