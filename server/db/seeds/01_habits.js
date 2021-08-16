exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('habits').del()
    .then(function () {
      // Inserts seed entries
      return knex('habits').insert([
        { id: 1, name: 'Called Alyssa', desired: true },
        { id: 2, name: 'Called Mum and Dad', desired: true }
      ])
    })
}
