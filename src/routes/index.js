import { Router } from 'express'

import userRoutes from './userRoutes.js'
import entregadorRoutes from './entregadorRoutes.js'

const router = Router()

router.use("/users", userRoutes)
router.use("/entregadores", entregadorRoutes)

export default router