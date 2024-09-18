
import invoiceModel from '../models/ModelsInvoices.js'

export const getAllInvoices = async (req, res) => {
    try{
        const invoices = await invoiceModel.findAll()
        res.json(invoices)
    } catch (error){
        res.json({message: error.message})
    }
}


export const getInvoice = async (req, res) => {
    try {
        const invoice = await invoiceModel.findAll({
            where:{id:req.params.id}
        })
        res.json(invoice[0])
    } catch (error){
        res.json({message: error.message})
    }
}

export const createInvoice = async (req, res) => {
    try{
        await invoiceModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error){
        res.json({message: error.message})
    }
}

export const updateInvoice = async (req, res) => {
    try{
        await invoiceModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}

export const deleteInvoice = async(req, res) => {
    try{
        await invoiceModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (error){
        res.json({message: error.message})
    }
}