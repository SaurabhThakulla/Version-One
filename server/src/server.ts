import express from "express";
import "dotenv/config";
import cors from "cors";
import { login, signup } from "./controllers/auth.controller.js";
import { categoriesRouter } from "./controllers/category.controller.js";
import { authmiddleware } from "./middleware/auth.middleware.js";
import { TaskRouter } from "./controllers/task.controller.js";
import { PostsRouter } from "./controllers/posts.controller.js";

const app = express();

app.use(cors({
    origin: "*",
	credentials: true
}));
app.use(express.json());


app.post("/signup", signup)
app.post("/login", login)
app.use("/categories", authmiddleware, categoriesRouter)
app.use("/task", authmiddleware, TaskRouter)
app.use("/posts", authmiddleware, PostsRouter)

app.get("/", (req, res) => {
    res.send("Server is Running");
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is Running on Port " + (process.env.PORT || 4000));
})