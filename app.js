
import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";

import { dbconnect } from "./database/dbconnect.js";
import userRoutes from "./routes/userRoutes.js";
import { auth, autorize } from "./middleware/authentication.js";
import dossierPatientRoutes from "./routes/dossierPatientRoutes.js";
import infoPersonnelRoutes from "./routes/infoPersonnelRoutes.js";
import testMedicalRoutes from "./routes/testMedicalRoutes.js";


const app = express()
config({path: '.env'})

dbconnect()
app.use(express.json())
app.use(bodyParser.urlencoded())


app.use('/api/health/user/', userRoutes)
app.use('/api/health/patient/', dossierPatientRoutes)
app.use('/api/health/infopersonnel/', infoPersonnelRoutes)
app.use('/api/health/test/', testMedicalRoutes)

export default app;