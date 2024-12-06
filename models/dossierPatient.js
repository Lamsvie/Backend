import mongoose from "mongoose";

const dossier = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        adresse: {
            type: String,
            required: true
        },
        blood: {
            type: String,
            enum: ["O+", "AB"],
            default: "AB"
        },
        genre: {
            type: String,
            enum: ["Homme", "Femme"],
            required: true
        },
        typeDossier: {
            type: String,
            enum: ["Parent", "Enfant"],
            default: "Parent"
        },
        cni: {
            type: String,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
)

export const DossierPatient = mongoose.model("DossierPatient", dossier)