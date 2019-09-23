
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, volunteer_name: 'Ashley Morgan', password: 'pass'},
        {id: 2, volunteer_name: 'Randy Perez', password: 'pass'},
        {id: 3, volunteer_name: 'Patricia Jensen', password: 'pass'},
        {id: 4, volunteer_name: 'Margaret Tucker', password: 'pass'},
        {id: 5, volunteer_name: 'Justin Keller', password: 'pass'},
        {id: 6, volunteer_name: 'Eugene Berry', password: 'pass'},
        {id: 7, volunteer_name: 'Anthony Jones', password: 'pass'},
        {id: 8, volunteer_name: 'Bryan Rodriguez', password: 'pass'},
        {id: 9, volunteer_name: 'Teresa Jones', password: 'pass'},
        {id: 10, volunteer_name: 'Jean Wells', password: 'pass'}
      ]);
    });
};
