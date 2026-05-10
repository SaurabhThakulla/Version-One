import express from "express";
import "dotenv/config";
import { login, signup } from "./controllers/auth.controller.js";
import { categoriesRouter } from "./controllers/category.controller.js";
import { authmiddleware } from "./middleware/auth.middleware.js";

const app = express();

app.use(express.json());


app.post("/signup", signup)
app.post("/login", login)
app.use("/categories", authmiddleware, categoriesRouter)

app.get("/", (req, res) => {
    res.send("Server is Running");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running on Port " + (process.env.PORT || 3000));
})