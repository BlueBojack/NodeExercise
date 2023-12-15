const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/planetsdb');

module.exports = db;