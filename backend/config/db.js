import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jaykantariya22:food@cluster0.ot9lmw9.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
