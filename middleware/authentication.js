import jwt  from "jsonwebtoken"

// verifier que le user a un token valide
export const auth = async (req,res, next) => {
    const token = req.headers.authorization

    if (!token) {

        res.status(403).json({message: "Non authorisé!"})
    }

    try {
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET)

        if (!verifyToken) {

            res.status(403).json({message: "Non authorisé!"})
        }

        req.auth = {
            id: verifyToken.payload.userId,
            role: verifyToken.payload.role
        }

        next()

    } catch (error) {
        res.status(500).json({error})
    }

}


// mettre en place une fonction d'autorisation en fonction des roles
export const autorize = (role) => {

    return [
        (req, res, next) => {
            if (req.auth.role != role) {
        
                res.status(403).json({message: "Acces non authorisé!"})
            }
        
            next();
        }
    ]


}