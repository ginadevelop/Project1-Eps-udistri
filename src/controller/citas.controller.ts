import { RequestHandler } from 'express';
import { Cita } from '../models/cita.model';

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getCitas: RequestHandler = async (req, res) => {
  try {
    const citas = await Cita.findAll()

    res.status(200).json({
      message: 'It has been carried out satisfactorily',
      data: citas
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error, could not get medical appointments',
      error: err.message
    })
  }
}

export const getOneCita: RequestHandler = async (req, res) => {
  try {
    const { profesional, paciente, fecha } = req.query

    const cita = await Cita.findOne({
      where: {
        fecha_hora: fecha,
        id_profesional: profesional,
        id_numeroCedula: paciente
    }
    })

    if (cita){
      res.status(200).json({
        message: 'Medical appointment found',
        data: cita
      })
    } else {
      res.status(404).json({
        message: 'Medical appointment not found'
      })
    }

  } catch (error:any) {
    res.status(500).json({
      message: 'Error, could not get medical appointments',
      error: error.message
    })
  }
}

export const createCita: RequestHandler = async (req, res) => {
  try {
    const cita = await Cita.create(req.body)

    res.status(201).json({
      message: 'Medical appointment created!',
      data: cita
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'Error, Medical appointment could not be created',
      error: err.message
    })
  }
}

export const updateCita: RequestHandler = async (req, res) => {
  try {
    const { profesional, paciente, fecha } = req.query

    const cita = await Cita.findOne({
      where: {
        fecha_hora: fecha,
        id_profesional: profesional,
        id_numeroCedula: paciente
    }
    })

    if (cita){
      await Cita.update(req.body, {
        where: {
          fecha_hora: fecha,
          id_profesional: profesional,
          id_numeroCedula: paciente
      }
    })
    res.status(200).json({
      message: 'Medical appointment correctly updated'
    })
    } else {
      res.status(404).json({
        message: 'Medical appointment does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, medical appointment could not be modified',
      error: error.message
    })
  }
}

export const deleteCita: RequestHandler = async (req, res) => {
  try {
    const { profesional, paciente, fecha } = req.query

    const cita = await Cita.findOne({
      where: {
        fecha_hora: fecha,
        id_profesional: profesional,
        id_numeroCedula: paciente
    }
    })

    if (cita){
      await Cita.destroy({
        where: {
          fecha_hora: fecha,
          id_profesional: profesional,
          id_numeroCedula: paciente
        }
      })
      res.status(200).json({
        message: 'Medical appointment deleted'
      })
    } else {
      res.status(404).json({
        message: 'Medical appointment does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, medical appointment could not be deleted',
      error: error.message
    })
  }
}