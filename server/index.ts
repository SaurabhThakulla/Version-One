import express from "express";
import signup from "./routes/signup";
const app = express();

app.use(express.json());
app.use("/signup", signup);

app.get("/", (req, res) => {
    res.send("Server is Running");
})

app.listen(3000, () => {
    console.log("Server is Running on Port 3000");
})