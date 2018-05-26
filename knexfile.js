module.exports = {
  client: 'pg',
  connection: {
    host:     process.env.PG_HOST,
    database: process.env.PG_DB,
    user:     process.env.PG_USER,
    password: process.env.PGPASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    stub: 'migration_stub.js'
  }
};
