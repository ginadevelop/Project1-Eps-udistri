import { RequestHandler } from "express";
import { Doctor } from '../models/doctores.model';
import { responseSuccess,errorResponseFailed,sendErrorServer } from '../error_messages/messages';

export const getDoctores: RequestHandler = async (req, res) => {
    try{

        const doctores = await Doctor.findAll();

        if(doctores){
            responseSuccess(res,doctores,200);
        }else{
            errorResponseFailed(res);
        }


    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const getDoctoresById: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        if(doctor)
        {
            responseSuccess(res,doctor,200);
        }else{
            errorResponseFailed(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err)
    }
}

export const createDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.create(req.body);
        responseSuccess(res,doctor,201)

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}

export const updateDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        
        if(doctor)
        {
            await Doctor.update(req.body,{
                where:{
                    id_profesional: req.params.id
                }
            });
            responseSuccess(res,doctor,200);
        }else{
            errorResponseFailed(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}

export const deleteDoctor: RequestHandler = async (req, res) => {
    try{
        const doctor = await Doctor.findByPk(req.params.id);
        
        if(doctor)
        {
            await Doctor.destroy({
                where: {
                    id_profesional: req.params.id
                }
            });
            responseSuccess(res,doctor,200);
        }else{
            errorResponseFailed(res);
        }

    }catch(error){
        const err = error as Error;
        sendErrorServer(res,err);
    }
}