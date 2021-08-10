exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, name: 'Called Alyssa', desired: true },
        { id: 2, name: 'Called Mum and Dad', desired: true }
      ])
    })
}
