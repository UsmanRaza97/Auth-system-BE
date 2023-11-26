import express from "express";
import bodyParser from "body-parser";
import './db'
import UserRoutes from "./routes/user";

const app = express();
app.use(bodyParser.json());

app.use("/user", UserRoutes);

app.listen(3000, () => console.log("app is running on", 3000));
