import { Router } from "express";
import { AddPc } from "../controllers/PC/add.controller";
import { GetPc } from "../controllers/PC/get.controller";
import { UpdatePc } from "../controllers/PC/update.controller";
import { DelPc } from "../controllers/PC/del.controller";

// Creating Route To User All Requests
const router = Router();

// Post Routes
router.post("/add-pc", AddPc);
// Get Routes
router.get("/get-pc", GetPc);
// Put Routes
router.put("/update-pc/:id", UpdatePc);
// Delete Routes
router.delete("/delete-pc/:id", DelPc);

export { router };
