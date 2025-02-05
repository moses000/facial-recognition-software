import express from "express";
import { registerFace, verifyFace } from "../controllers/faceController.js";

const router = express.Router();

router.post("/register", registerFace);
router.post("/verify", verifyFace);

export default router;

