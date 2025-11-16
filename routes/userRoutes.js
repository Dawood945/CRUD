import express from "express"
import { createUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/create', createUser)
router.get('/getAll', getAllUser)

export default router;
