import express from "express";
import customersRoutes from "./routes/customersRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";
import connectToDb from "./middlewares/dbConnect.js";

const app = express();
// to handle request body as json
app.use(express.json());

await connectToDb(
  "mongodb+srv://technessuser:21459708Az@techness.wrnaodc.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/hello", (req, res) => res.json({ message: "hello world" }));

// Customer routes
app.use("/customers", customersRoutes);

// HANDLE UNDEFINED ROUTES AND ERRORS
app.use(notFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is runing on port 4000");
});
