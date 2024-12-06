import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken";


// creation de compte user
export const signUp = async (req, res, next) => {
    try {
        
        const { firstName, lastName, cni, email, password, tel, role } = req.body

        const isExistUser = await User.findOne({
            email
        })

        if (isExistUser) {

            return res.status(401).json({ message: "Cet utilisateur exist!" })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        await new User({
            firstName, lastName, cni, email, tel, role,
            password: hashpassword
        }).save()

        res.status(201).json({ message: "Utilisateur crée avec Succes!" })



    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error.errorResponse.errmsg })

    }
}

// login utilisateur
export const logIn = async (req, res, next) => {


    try {
        const { email, password } = req.body

        const isExistUser = await User.findOne({
            email
        })

        if (!isExistUser) {

            return res.status(400).json({ message: "Login/Password incorrect!" })
        }

        const hashpassword = await bcrypt.compare(password, isExistUser.password)

        if (!hashpassword) {
            return res.status(400).json({ message: "Login/Password incorrect!" })
        }

        const payload = {
            userId: isExistUser._id,
            role: isExistUser.role
        }

        const token = Jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })

        res.status(200).json({ token: token })



    } catch (error) {

        res.status(500).json({ error: error })
    }
}

// liste utilisateur
export const getAllUser = async (req, res, next) => {
    try {

        const AllUers = await User.find()

        res.status(200).json(AllUers)

    } catch (error) {
        res.status(500).json({ error })
    }
}

// liste one utilisateur
export const getOneUser = async (req, res, next) => {
    try {

        const OneUser = await User.findOne({
            _id: req.params.id
        })

        res.status(200).json(OneUser)


    } catch (error) {
        res.status(500).json({ error })
    }
}

// verifier que le user a un token valide
export const verifyToken = async (req, res, next) => {


    try {
        const token = req.headers.authorization

        if (!token) {

            res.status(403).json({ message: "Non authorisé!" })
        }

        const verifyToken = Jwt.verify(token, process.env.JWT_SECRET)        
        

        if (!verifyToken) {

            res.status(403).json({ message: "Non authorisé!" })
        }

        const OneUser = await User.findOne({
            _id: verifyToken.userId
        })

        const userInfo = {

            id: OneUser._id,
            firstName: OneUser.firstName,
            lastName: OneUser.lastName,
            email: OneUser.email,
            role: OneUser.role

        }

        res.status(200).json(userInfo)

    } catch (error) {
        res.status(500).json({ error })
    }

}