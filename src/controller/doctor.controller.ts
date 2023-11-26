import { RequestHandler } from 'express'
import { Doctor } from '../models/doctores.model'

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getDoctores: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findAll()

      res.status(200).json({
        message: 'It has been carried out satisfactorily',
        data: doctores
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error, could not get doctors',
      error: err.message
    })
  }
}

export const getDoctorById: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor) {
      res.status(200).json({
        message: 'Doctor found',
        data: doctor
      })
    } else {
      res.status(404).json({
        message: 'Doctor not found'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, could not get doctors',
      error: error.message
    })
  }
}

export const createDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body)

    res.status(201).json({
      message: 'Doctor created!',
      data: doctor
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'Error, Doctor could not be created',
      error: err.stack
    })
  }
}

export const updateDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor){
      await Doctor.update(req.body, {
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor correctly updated'
      })
    } else {
      res.status(404).json({
        message: 'Doctor does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, doctor could not be modified',
      error: error.message
    })
  }
}

export const deleteDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor){
      await Doctor.destroy({
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor deleted'
      })
    } else {
      res.status(404).json({
        message: 'Doctor does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, Doctor could not be deleted',
      error: error.message
    })
  }
}