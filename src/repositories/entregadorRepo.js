import database from "../config/database.js"

class EntregadorRepo{

    async save(entregador) {
        const [id] = await database.table('entregador').insert(entregador)
        return id
    }

    findById(id) {
        return database.table("entregador").select()
        .where({ id })
        .first()
    }

    findByNome(nome) {
        return database.table("entregador").select()
        .where({ nome })
        .first()
    }

    findByCpfCnpj(cpfCnpj) {
        return database.table("entregador").select()
        .where({ cpfCnpj })
        .first()
    }

    findByEmail(email) {
        return database.table("entregador").select()
        .where({ email })
        .first()
    }

    async findByUserWithEntregador(id) {
        const entregador = await database.table("entregador")
        .select(["users.login", "users.type", "entregador.*"])
        .where("entregador.id", "=", id)
        .innerJoin("users","users.id","entregador.idUser")
        .first();

        return entregador;
    }

    findAll() {
        return database.table("entregador").select()
    }
}

export default new EntregadorRepo()