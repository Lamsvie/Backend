import mongoose from "mongoose"

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
        qualification: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            enum: ["Homme", "Femme"],
            required: true
        },
        bio: {
            type: String,
        },
        cni: {
            type: String,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
)

export const InfoPersonnel = mongoose.model("InfoPersonnel", dossier)