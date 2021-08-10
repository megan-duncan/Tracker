exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, habits_id: 2, date: '2021-08-07' },
        { id: 2, habits_id: 1, date: '2021-08-10' }
      ])
    })
}
