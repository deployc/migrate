const Knex = require('knex')

/**
 * @param {Knex} knex 
 * @param {PromiseConstructor} Promise
 */
exports.up = function (knex, Promise) {
    knex.schema.createTable('users', t => {
        t.uuid('id').primary()
        t.string('username').unique()
        t.string('email').unique()
        t.string('password').notNullable()
        t.timestamps(false, true)
    })
};

/**
 * @param {Knex} knex 
 * @param {PromiseConstructor} Promise
 */
exports.down = function (knex, Promise) {
    knex.schema.dropTable('users')
};
