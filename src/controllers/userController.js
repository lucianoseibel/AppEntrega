import userRepo from "../repositories/userRepo.js"
import { userValidator } from "../validators/user.js"

class UserController {
    async save(req, res) {
        const user = req.body

        const validation = userValidator(user)
        if (validation) {
            return res.status(400).send(validation)
        }

        const userExists = await userRepo.findByLogin(user.login) 
        
        if (userExists) {
            return res.status(409).send("User is already in use")
        }
        const id = await userRepo.save(user) 
        return res.status(201).json({ id })
    }

    async findAll (req, res) {
        const users = await userRepo.findAll()
        return res.status(200).json(users)
    }
}

export default new UserController()