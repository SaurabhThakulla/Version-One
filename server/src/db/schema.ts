import { pgTable, uuid, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { title } from "node:process";
import { string } from "zod";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    username: text("username").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const posts = pgTable("posts", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const category = pgTable("category", {
    id: uuid("category_id").primaryKey().defaultRandom(),
    userid: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    title: text("title").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
} )


export const tasks = pgTable("tasks", {
    id: uuid("task_id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    categoryId: uuid("category_id").references(() => category.id).notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    status: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const tasklogs = pgTable("tasklogs", {
    id: uuid("tasklog_id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    categoryId: uuid("category_id").references(() => category.id).notNull(),
    taskId: uuid("task_id").references(() => tasks.id).notNull(),
    log: text("log").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const streaks = pgTable("streaks", {
    id: uuid("streak_id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id, { onDelete: "cascade" })
        .notNull(),
    taskId: uuid("task_id").references(() => tasks.id).notNull(),
    currentStreak: integer("current_streak").notNull().default(0),
    longestStreak: integer("longest_streak").notNull().default(0),
});
