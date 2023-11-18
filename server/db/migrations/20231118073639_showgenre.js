/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  'ShowGenres',
    function (table) {
      // Primary Key
      table.increments('id').primary()

      // Foreign Keys
      table
        .integer('show_id')
        .unsigned()
        .references('id')
        .inTable('show')
        .onDelete('CASCADE')
        .index()

      table
        .integer('genre_id')
        .unsigned()
        .references('id')
        .inTable('genre')
        .onDelete('CASCADE')
        .index()

      // Timestamps
      table.timestamps(true, true)
    }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('ShowGenres')
}
