import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { mongoDBURL, PORT } from "./config";

const app = express();
app.use(express.json());
app.use(cors());
mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log("server started"));
    })
    .catch((err) => {
        console.log(err);
    });