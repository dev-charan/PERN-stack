import express from "express"
import { createUserService, deleteUserService, getAllUserService, getUserByIdService, updateUserService } from "../models/user.model";

const router = express.Router();

router.post("/user",createUser);
router.get("/user/",getUsers);
router.get("/user/:id",getUserById)
router.put("/user/:id",updateUser)
router.delete("user/:id",deleteUser)

export default router;