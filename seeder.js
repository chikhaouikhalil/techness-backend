import connectToDb from "../middlewares/dbConnect";

await connectToDb();

const myFunction = async () => {
  console.log("hello");
};

myFunction();
