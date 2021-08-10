exports.up = function (knex) {
  return knex.schema.createTable('activities', table => {
    table.increments('id')
    table.integer('habits_id')
    table.date('date')
    table.foreign('habits_id').references('id').inTable('habits')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('activities')
}
