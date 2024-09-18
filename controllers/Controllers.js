//importamos el modelo
import studentModel from "../models/Models.js";

//metodos para el CRUD

//traer todos los registros
export const getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.findAll()
        res.json(students)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//traer un registro
export const getStudent = async (req, res) => {
    try {
        const student = await studentModel.findAll({
            where:{id:req.params.id}
        })
        res.json(novedad[0])
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//crear un registro
export const createStudent = async (req, res) => {
    try {
        await studentModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//actualizar registro
export const updateStudent = async (req, res) => {
    try {
        await studentModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
//eliminar registro
export const deleteStudent = async(req, res) => {
    try {
        await studentModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}
