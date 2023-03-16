import expressAsyncHandler from "express-async-handler";
import Customer from "../models/customerModel.js";

// @desc GET All USER'S CUSTOMERS
// @route GET customers/
export const getUserCustomers = expressAsyncHandler(async (req, res) => {
  const uid = req.query.uid;
  const keyword =
    req.query.keyword || ""
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
  const customers = await Customer.find({ ...keyword, uid });
  res.json(customers);
});

// @desc Create Customer
// @route POST customers/create-cusotmer
export const createCustomer = expressAsyncHandler(async (req, res) => {
  const customer = new Customer({
    ...req.body,
  });
  const createdCustomer = await customer.save();
  res.status(201).json(createdCustomer);
});
