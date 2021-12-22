import { Router } from 'express'
import entregadorController from '../controllers/entregadorController.js'

const router = Router()

router.post("/", entregadorController.save)
router.get("/", entregadorController.findAll)
router.get("/user/:id", entregadorController.findByUserWithEntregador)

export default router