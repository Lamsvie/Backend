
import express from "express";
import { signUp, logIn, getAllUser, getOneUser, verifyToken } from "../controllers/userController.js";

const userRoutes = express.Router()

userRoutes.post('/signin', signUp)
userRoutes.post('/login', logIn)
userRoutes.get('/', getAllUser)
//userRoutes.put('/:id', getOneUser)
userRoutes.get('/checktoken/', verifyToken)


export default userRoutes;