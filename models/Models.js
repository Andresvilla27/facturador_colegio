//importamos la conexion con la base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const studentModel = db.define('student', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    fecha: { type: DataTypes.TIME },
    nombres: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    dni: { type: DataTypes.INTEGER },
    grado: { type: DataTypes.INTEGER },
    tutor: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.TEXT }
},{
    timestamps: false
})




export default studentModel;