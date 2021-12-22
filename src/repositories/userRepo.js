import database from "../config/database.js"

class UserRepo{
    async save(user) {
        const [id] = await database.table('users').insert(user)
        return id
    }

    findByLogin(login) {
        return database.table("users").select()
        .where({ login })
        .first()
    }

    findAll() {
        return database.table("users").select()
    }
}

export default new UserRepo()