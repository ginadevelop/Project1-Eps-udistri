import { RequestHandler } from "express";
import { Paciente } from '../models/paciente.model';
import { responseSuccess,errorResponseFailed,sendErrorServer } from '../error_messages/messages';

export const getPacientes: RequestHandler = async (req, res) => {
    try{

        const pacientes = await Paciente.findAll();
        responseSuccess(res,pacientes,200)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getPacientesById: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        if(paciente)
        {
            responseSuccess(res,paciente,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createPaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.create(req.body);
   
        responseSuccess(res,paciente,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updatePaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        
        if(paciente)
        {
            await Paciente.update(req.body,{
                where:{
                    id_numeroCedula: req.params.id
                }
            });
            responseSuccess(res,paciente,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deletePaciente: RequestHandler = async (req, res) => {
    try{
        const paciente = await Paciente.findByPk(req.params.id);
        
        if(paciente)
        {
            await Paciente.destroy({
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            responseSuccess(res,paciente,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}