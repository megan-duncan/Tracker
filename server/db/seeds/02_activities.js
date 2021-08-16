exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        { id: 1, habits_id: 2, date: '2021-08-07' },
        { id: 2, habits_id: 1, date: '2021-08-10' }
      ])
    })
}
