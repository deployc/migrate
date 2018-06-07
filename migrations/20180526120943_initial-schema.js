const Knex = require('knex')

/**
 * @param {Knex} knex
 * @param {PromiseConstructor} Promise
 */
exports.up = function (knex, Promise) {
    return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable('users', t => {
            t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
            t.string('username').unique()
            t.string('email')
            t.string('password').notNullable()
            t.boolean('is_admin').notNullable().defaultTo(false)
            t.timestamps(false, true)
        })
};

/**
 * @param {Knex} knex
 * @param {PromiseConstructor} Promise
 */
exports.down = function (knex, Promise) {
    return knex.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')
        .dropTable('users')
};
