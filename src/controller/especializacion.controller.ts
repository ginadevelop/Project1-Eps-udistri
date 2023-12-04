import { RequestHandler } from "express";
import { Especializacion } from '../models/especializacion.model';
import { responseSuccess,errorResponseFailed,sendErrorServer } from '../error_messages/messages';

export const getEspecialidades: RequestHandler = async (req, res) => {
    try{

        const especializacion = await Especializacion.findAll();
        responseSuccess(res,especializacion,200)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getEspecialidadById: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        if(especialidad)
        {
            responseSuccess(res,especialidad,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.create(req.body);
   
        responseSuccess(res,especialidad,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        
        if(especialidad)
        {
            await Especializacion.update(req.body,{
                where:{
                    id_especializacion: req.params.id
                }
            });
            responseSuccess(res,especialidad,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deleteEspecialidad: RequestHandler = async (req, res) => {
    try{
        const especialidad = await Especializacion.findByPk(req.params.id);
        
        if(especialidad)
        {
            await Especializacion.destroy({
                where: {
                    id_especializacion: req.params.id
                }
            });
            responseSuccess(res,especialidad,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}