import entregadorRepo from "../repositories/entregadorRepo.js"
import { entregadorValidator } from "../validators/entregador.js"

class EntregadorController {

    async save(req, res) {
    
        const entregador = req.body

        const validation = entregadorValidator(entregador)
        if (validation) {
            return res.status(400).send(validation)
        }

        const entregadorExists = await entregadorRepo.findByNome(entregador.nome) 
        
        if (entregadorExists) {
            return res.status(409).send("Entregador already exists")
        }

        const cpfCnpjEmUso = await entregadorRepo.findByCpfCnpj(entregador.cpfCnpj) 
        
        if (cpfCnpjEmUso) {
            return res.status(409).send("Entregador cpfCnpj already exists")
        }

        const emailEmUso = await entregadorRepo.findByEmail(entregador.email) 
        
        if (emailEmUso) {
            return res.status(409).send("Entregador email already exists")
        }

        const id = await entregadorRepo.save(entregador) 
        
        return res.status(201).json({ id })
    }

    async findAll (req, res) {
        const entregadores = await entregadorRepo.findAll()
        return res.status(200).json(entregadores)
    }

    async findByUserWithEntregador (req, res) {
        const id = req.params.id
        const entregador = await entregadorRepo.findByUserWithEntregador(id)
        return res.status(200).json(entregador)
    }
}

export default new EntregadorController()