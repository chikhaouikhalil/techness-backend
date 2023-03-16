import { Router } from "express";
import {
  createCustomer,
  getUserCustomers,
} from "../controllers/customerControllers.js";

const router = Router();

//  CREATE CUSTOMER
// POST customers/create-user
// body : uid,name,email,phone,image
router.post("/create-customer", createCustomer);

// GET USER'S CUSTOMERS
router.get("/", getUserCustomers);

//  GET Customer infos
// GET customers/customer
router.get("/customer", () => {});

export default router;
