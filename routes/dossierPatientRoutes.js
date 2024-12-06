import express from "express";

import { createPatientFolder, getAllPatientFolder, getOnePatientFolder , updateOnePatientFolder, deleteOnePatientFolder } from "../controllers/dossierpatientController.js";

const dossierPatientRoutes =  express.Router()

dossierPatientRoutes.post('/createfolder', createPatientFolder)
dossierPatientRoutes.get('/folder', getAllPatientFolder)
dossierPatientRoutes.get('/folder/:cni', getOnePatientFolder)
dossierPatientRoutes.put('/updatefolder/:id', updateOnePatientFolder)
dossierPatientRoutes.delete('/deletefolder/:id', deleteOnePatientFolder)

export default dossierPatientRoutes;