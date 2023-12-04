import { Router } from "express";
import { createCita, deleteCita, getCitas, getOneCita, updateCita, getCitaByEspecialidad, getCitaByPaciente, getCitaByDoctores } from "../controller/citas.controller";

const router = Router();

router.get('/', getCitas)
router.get('/one', getOneCita)
router.post('/', createCita)
router.put('/update', updateCita)
router.delete('/delete', deleteCita)
router.get('/especialidad/:id',getCitaByEspecialidad)
router.get('/doctor/:id',getCitaByDoctores)
router.get('/paciente/:id',getCitaByPaciente)

export default router;
