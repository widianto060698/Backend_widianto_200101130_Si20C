import express from "express";
import {
  getUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/mahasiswa", getUsers);
router.get("/mahasiswa/:id", getUserById);
router.post("/mahasiswa", saveUser);
router.put("/mahasiswa/:id", updateUser);
router.delete("/mahasiswa/:id", deleteUser);

export default router;
