import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  typeOfService: { type: String, required: true },
  productType: { type: String, required: true },
  brand: { type: String, required: false },
  age: { type: String, required: false },
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
  imageUrl: { type: String, required: false },
});

export const InquiryModel = mongoose.model("inquiries", InquirySchema);
