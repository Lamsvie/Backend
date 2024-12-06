import mongoose from "mongoose";

const testMedicalSchema = mongoose.Schema(
    {
        testType: {
            type: String,
            required: true
        },
        id_patient: {
            type: String,
            ref: "DossierPatient",
            required: true
        },
        id_medecin: {
            type: String,
            ref: "InfoPersonnel",
            required: true
        },
        Bplevel: {
            type: Number,
            required: true
        },
        heartRate: {
            type: Number,
            required: true
        },
        sugarlevel: {
            type: Number,
            required: true
        },
        colesterol: {
            type: Number,
            required: true
        },
        test_ref: {
            // creer une ref propre au modele pour le lier au rapport et prescription "test_time"
            type: String,
            required: true,
            unique: true
        }
        
        
    },
    { timestamps: true }
)

export const TestMedical = mongoose.model("TestMedical", testMedicalSchema)