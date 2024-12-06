import express from "express";

import { createPersonnelInfo, getAllpersonnel, getOnepersonnel , updateOnePersonnel, deleteOnePersonnel } from "../controllers/infoPersonnelontroller.js";

const infoPersonnelRoutes = express.Router()

infoPersonnelRoutes.post('/create', createPersonnelInfo)
infoPersonnelRoutes.get('/liste', getAllpersonnel)
infoPersonnelRoutes.get('/liste/:cni', getOnepersonnel)
infoPersonnelRoutes.put('/:id', updateOnePersonnel)
infoPersonnelRoutes.delete('/:id', deleteOnePersonnel)

export default infoPersonnelRoutes; 