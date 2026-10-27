
import { Router } from "express";
import { createCategory, deleteCategory, getCategories } from "../controllers/categoryController.js";
import { requiredAuth,requireRole  } from "../middleware/auth.js";

const categoryRouter=Router()

// public / customer can view categories

categoryRouter.get('/',getCategories)

// Merchant can view categories
categoryRouter.post('/',requiredAuth,requireRole(["merchant"]),createCategory)
categoryRouter.delete('/:id',requiredAuth,requireRole(["merchant"]),deleteCategory)


export default categoryRouter

