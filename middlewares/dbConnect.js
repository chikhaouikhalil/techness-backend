import mongoose from "mongoose";

export default async function connectToDb() {
  const conn = await mongoose.connect(
    "mongodb+srv://technessuser:21459708Az*@techness.wrnaodc.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connected to db");
}
