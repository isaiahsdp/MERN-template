import express from "express";
import mongoose from "mongoose";
import { InquiryModel } from "../models/Inquiries.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await InquiryModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const inquiry = new InquiryModel(req.body);
  try {
    const response = await inquiry.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as inquiryRouter };
