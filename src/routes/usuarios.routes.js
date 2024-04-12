import { Router } from "express";
import { crearUsuario, login , listarUsuarios, obtenerUsuario, editarUsuario, eliminarUsuario} from "../controllers/usuarios.controllers.js";


const router = Router()

router.route("/registrar").post(crearUsuario)
router.route("/usuarios").get(listarUsuarios)
router.route("/usuarios/:id").get(obtenerUsuario).put(editarUsuario).delete(eliminarUsuario)
router.route("/").post(login)
export default router