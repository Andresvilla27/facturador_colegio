import db from "../database/db.js";

import { DataTypes } from "sequelize";

const invoiceModel = db.define('invoices', {
    id: { type:DataTypes.INTEGER, primaryKey: true },
    nombres: { type:DataTypes.STRING },
    apellido: { type:DataTypes.STRING },
    dni: { type:DataTypes.INTEGER },
    factura: { type:DataTypes.STRING },
    importe: { type:DataTypes.INTEGER },
    mes_factura: { type:DataTypes.DATE },
    cuenta_numero: { type: DataTypes.INTEGER},
    img: { type:DataTypes.STRING }
},{
    timestamps:false
})  

export default invoiceModel;