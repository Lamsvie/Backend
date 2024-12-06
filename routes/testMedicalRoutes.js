import express from "express";

import { createTest, getAllTest, updateOneTest, deleteOneTest } from "../controllers/testMedicalController.js";

const testMedicalRoutes = express.Router()

testMedicalRoutes.post('/create', createTest)
testMedicalRoutes.get('/', getAllTest)
testMedicalRoutes.put('/:id', updateOneTest)
testMedicalRoutes.delete('/:id', deleteOneTest)


export default testMedicalRoutes;