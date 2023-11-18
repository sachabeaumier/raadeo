/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  'show',
    function (table) {
      table.increments('id').primary()

      // Show Information
      table.string('artist').notNullable()
      table.string('show_photo').notNullable()
      table.string('name_of_show').notNullable()
      table.text('description').notNullable()
      table.string('location_of_artist').notNullable()
    }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('show')
}
