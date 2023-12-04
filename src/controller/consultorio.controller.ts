import { RequestHandler } from "express";
import { Consultorio } from '../models/consultorio.model';
import {  responseSuccess,errorResponseFailed,sendErrorServer } from '../error_messages/messages';

export const getConsultorios: RequestHandler = async (req, res) => {
    try{

        const consultorio = await Consultorio.findAll();

        if(consultorio){
            responseSuccess(res,consultorio,200);
        }else{
            errorResponseFailed(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getConsultorioById: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        if(consultorio)
        {
            responseSuccess(res,consultorio,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.create(req.body);
        
        responseSuccess(res,consultorio,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const updateConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        
        if(consultorio)
        {
            await Consultorio.update(req.body,{
                where:{
                    id_consultorio: req.params.id
                }
            });
            responseSuccess(res,consultorio,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const deleteConsultorio: RequestHandler = async (req, res) => {
    try{
        const consultorio = await Consultorio.findByPk(req.params.id);
        
        if(consultorio)
        {
            await Consultorio.destroy({
                where: {
                    id_consultorio: req.params.id
                }
            });
            responseSuccess(res,consultorio,200)
        }else{
            errorResponseFailed(res)
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}