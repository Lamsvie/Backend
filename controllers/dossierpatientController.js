
import { DossierPatient } from "../models/dossierPatient.js"

// creation dossier patient
export const createPatientFolder = async (req, res, next) => {
    try {
        const { firstName, lastName, birthday, adresse, blood, genre, typeDossier, cni } = req.body

        await new DossierPatient({
            firstName, lastName, birthday, adresse, blood, genre, typeDossier, cni
        }).save()

        res.status(201).json({message: "Dossier ajouteé!"})


    } catch (error) {
        res.status(500).json({error})
    }
}

// liste de dossier patient
export const getAllPatientFolder = async (req, res, next) => {

    try {
        const allPatientFolder = await DossierPatient.find()

        res.status(200).json(allPatientFolder)

    } catch (error) {
        res.status(500).json({error})
    }
}

// liste one dossier
export const getOnePatientFolder = async (req, res, next) => {
    try {
        
        const OnePatientFolder = await DossierPatient.findOne({
            cni: req.params.cni
        })

        res.status(200).json(OnePatientFolder)

    } catch (error) {
        res.status(500).json({error})
    }
}

// update de dossier patient
export const updateOnePatientFolder = async (req, res, next) => {

    try {
        const { firstName, lastName, birthday, adresse, blood, genre, typeDossier, cni } = req.body

        await DossierPatient.updateOne(
            {_id: req.params.id },
            {
                $set: {
                    firstName, lastName, birthday, adresse, blood, genre, typeDossier, cni,
                    updateAt: new Date()
                }
            }
        )

        res.status(200).json({message: "Dossier Modifié avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}

// delete de dossier patient
export const deleteOnePatientFolder = async (req, res, next) => {
    try {
        await DossierPatient.deleteOne({
            _id: req.params.id
        })

        res.status(200).json({message: "Dossier patient supprimé avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}