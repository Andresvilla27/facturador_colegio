import express from "express";
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent } from "../controllers/Controllers.js";



const routes = express.Router()

routes.get('/', getAllStudents)
routes.get('/:id', getStudent)
routes.post('/', createStudent)
routes.put('/:id', updateStudent)
routes.delete('/:id', deleteStudent)


export default routes;