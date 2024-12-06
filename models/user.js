import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        cni: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        tel: {
            type: Number,
            unique: true,
            required: true
        },
        role: {
            type: String,
            enum: ["Admin", "Medecin", "Patient", "Superviseur", "Caissier"],
            default: "Patient"
        }
    },
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)