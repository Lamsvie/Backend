import { TestMedical } from "../models/testMedical.js";

// create testmedical
export const createTest = async (req, res, next) => {
    try {

        const { testType, id_patient, id_medecin, Bplevel, heartRate, sugarlevel, colesterol } = req.body
        const time = new Date()
        await new TestMedical({
            testType, id_patient, id_medecin, Bplevel, heartRate, sugarlevel, colesterol,
            test_ref: `test_${time}`
        }).save()

        res.status(201).json({message: "Test ajouté avec succes!"})

    } catch (error) {
        res.status(500).json(error)
    }
}

// liste de test
export const getAllTest = async (req, res, next) => {
    try {
        const AllTest = await TestMedical.find()

        res.status(200).json(AllTest)

    } catch (error) {
        res.status(500).json({error})
    }
}

// update one test
export const updateOneTest = async (req, res, next) => {
    try {
        const { testType, id_patient, id_medecin, Bplevel, heartRate, sugarlevel, colesterol, test_ref } = req.body

        await TestMedical.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    testType, id_patient, id_medecin, Bplevel, heartRate, sugarlevel, colesterol, test_ref
                }
            }
        )

        res.status(200).json({message: "Test mis a jour avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}

// delete one test
export const deleteOneTest = async (req, res, next) => {
    try {
        await TestMedical.deleteOne({
            _id: req.params.id
        })

        res.status(200).json({message: "Test supprimer avec succes!"})

    } catch (error) {
        res.status(500).json({error})
    }
}