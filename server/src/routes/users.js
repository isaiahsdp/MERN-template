import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js"

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await UserModel.findOne({ username });
        if (user) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new UserModel({ username, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});

router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if(!user) {
        return res.json({message: "User Doesn't Exist!"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.json({message: "Username or Password Is Incorrect!"})
    }

    const token = jwt.sign({id: user._id}, "secret")
    res.json({token, userID: user._id})
})

export { router as userRouter }