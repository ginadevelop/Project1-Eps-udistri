import { RequestHandler } from 'express'
import { Paciente } from '../models/paciente.model'

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getPacientes: RequestHandler = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll()

      res.status(200).json({
        message: 'It has been carried out satisfactorily',
        data: pacientes
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error, could not get patients',
      error: err.message
    })
  }
}

export const getPacienteById: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente) {
      res.status(200).json({
        message: 'Patient found',
        data: paciente
      })
    } else {
      res.status(404).json({
        message: 'Patient not found'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, could not get Patients',
      error: error.message
    })
  }
}

export const createPaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body)

    res.status(201).json({
      message: 'Patient created!',
      data: paciente
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'Error, Patient could not be created',
      error: err.stack
    })
  }
}

export const updatePaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente){
      await Paciente.update(req.body, {
        where: {
          id_numeroCedula: req.params.id
        }
      })
      res.status(200).json({
        message: 'Patient correctly updated'
      })
    } else {
      res.status(404).json({
        message: 'Patient does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, patient could not be modified',
      error: error.message
    })
  }
}

export const deletePaciente: RequestHandler = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id)

    if(paciente){
      await Paciente.destroy({
        where: {
          id_numeroCedula: req.params.id
        }
      })
      res.status(200).json({
        message: 'Patient deleted'
      })
    } else {
      res.status(404).json({
        message: 'Patient does not exist'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error, Patient could not be deleted',
      error: error.message
    })
  }
}