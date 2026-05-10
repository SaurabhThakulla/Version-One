import express from "express";
import "dotenv/config";
import { login, signup } from "./controllers/auth.controller.js";

const app = express();

app.use(express.json());


app.post("/signup", signup)
app.post("/login", login)

app.get("/", (req, res) => {
    res.send("Server is Running");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running on Port " + (process.env.PORT || 3000));
})