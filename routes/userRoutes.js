import express from "express"
import { createUser, getAllUser, patchUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/create', createUser)
router.get('/getAll', getAllUser)
router.patch('/patch/:id', patchUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router;
