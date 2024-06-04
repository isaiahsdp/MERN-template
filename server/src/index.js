import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { inquiryRouter } from "./routes/inquiries.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/inquiries", inquiryRouter);

mongoose.connect(
  "mongodb+srv://isaiahcodes0:udHkf0kD8bFckTFt@aiminfo.lql3tiq.mongodb.net/aiminfo?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("live"));
