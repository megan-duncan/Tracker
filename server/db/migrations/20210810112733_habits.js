exports.up = function (knex) {
  return knex.schema.createTable('habits', table => {
    table.increments('id')
    table.string('name')
    table.boolean('desired')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('habits')
}
