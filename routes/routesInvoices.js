import express from "express"
import {createInvoice, deleteInvoice, getAllInvoices, getInvoice, updateInvoice} from "../controllers/ControllersInvoices.js";

const routesInvoices = express.Router()

routesInvoices.get('/', getAllInvoices)
routesInvoices.get('/:id', getInvoice)
routesInvoices.post('/', createInvoice)
routesInvoices.put('/:id', updateInvoice)
routesInvoices.delete('/:id', deleteInvoice)

export default routesInvoices