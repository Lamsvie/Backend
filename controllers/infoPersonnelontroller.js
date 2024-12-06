import { InfoPersonnel } from "../models/dossiermedecin.js";

// create info personnel hopital
export const createPersonnelInfo = async (req, res, next) => {
    try {
        
        const { firstName, lastName, birthday, adresse, qualification, genre, bio, cni } = req.body

        await new InfoPersonnel({
            firstName, lastName, birthday, adresse, qualification, genre, bio, cni
        }).save()

        res.status(201).json({message: "Info ajouté avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}

// liste personnel hopital
export const getAllpersonnel = async (req, res, next) => {
    try {

        const AllPersonnel = await InfoPersonnel.find()

        res.status(200).json(AllPersonnel)
        
    } catch (error) {
        res.status(500).json({error})
    }
}

// liste one personnel
export const getOnepersonnel = async (req, res, next) => {
    try {
        
        const OnePatientFolder = await InfoPersonnel.findOne({
            cni: req.params.cni
        })

        res.status(200).json(OnePatientFolder)

    } catch (error) {
        res.status(500).json({error})
    }
}

// update one personnel hospital
export const updateOnePersonnel = async (req, res, next) => {
    try {
        const { firstName, lastName, birthday, adresse, qualification, genre, bio, cni } = req.body

        await InfoPersonnel.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    firstName, lastName, birthday, adresse, qualification, genre, bio, cni,
                    updateAt: new Date()
                }
            }
        )

        res.status(200).json({message: "Info modifié avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}

// delete one personnel hospital
export const deleteOnePersonnel = async (req, res, next) => {
    try {
        await InfoPersonnel.deleteOne({
            _id: req.params.id
        })

        res.status(200).json({message: "Personnel supprimé avec succes!"})

    } catch (error) {
        
        res.status(500).json({error})
    }
}