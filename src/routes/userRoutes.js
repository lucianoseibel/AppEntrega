import { Router } from 'express'
import userController from '../controllers/userController.js'

const router = Router()

router.post("/", userController.save)
router.get("/", userController.findAll)

export default router