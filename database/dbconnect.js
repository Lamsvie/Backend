import mongoose from "mongoose";

export const dbconnect = () => {
    mongoose.connect(process.env.URI_MONGO, { DBName: process.env.DBNAME }
    ).then(() => { console.log("Database connected!") }
    ).catch((err) => { console.log(err) }
    )
}