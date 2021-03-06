exports.up = function (knex) {
  return knex.schema.createTable('entries', table => {
    table.increments('id')
    table.integer('habits_id')
    table.integer('date')
    table.foreign('habits_id').references('id').inTable('habits')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('entries')
}
