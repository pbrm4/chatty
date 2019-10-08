const pg = require('pg');
const PG_DECIMAL_OID = 1700;
pg.types.setTypeParser(PG_DECIMAL_OID, parseFloat);
const config = {
    client: 'pg',
    debug: !!+process.env.DEBUG_DATABASE,
    searchPath: ['public'],
    connection: process.env.DATABASE_URL || {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT || 5432,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        timezone: 'Asia/Kolkata'
    },
    pool: {
        min: 0,
        max: 20
    }
};

const knex = require('knex')(config);
module.exports = knex;
