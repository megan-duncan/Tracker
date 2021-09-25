exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        { id: 1, habits_id: 2, date: 1629855926931 },
        { id: 2, habits_id: 1, date: 1608324926931 }
      ])
    })
}
