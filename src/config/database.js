import knex from 'knex'

const database = knex ({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Fgpn6b8d....',
        database: 'entregas'
    }
})

export default database