import { Router } from "express"
import {getEspecialidades, getEspecialidadById, createEspecialidad, updateEspecialidad, deleteEspecialidad } from '../controller/especializacion.controller'

const router = Router();

router.get('/', getEspecialidades)
router.get('/:id', getEspecialidadById)
router.post('/', createEspecialidad)
router.put('/:id', updateEspecialidad)
router.delete('/:id', deleteEspecialidad)

export default router;