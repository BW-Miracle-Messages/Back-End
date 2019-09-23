
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('connectVolunteers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('connectVolunteers').insert([
        {id: 1, case_id: 1, volunteer_id: 1},
        {id: 2, case_id: 2, volunteer_id: 1},
        {id: 3, case_id: 3, volunteer_id: 1},
        {id: 4, case_id: 4, volunteer_id: 2},
        {id: 5, case_id: 5, volunteer_id: 2},
        {id: 6, case_id: 6, volunteer_id: 3},
        {id: 7, case_id: 7, volunteer_id: 3},
        {id: 8, case_id: 8, volunteer_id: 4},
        {id: 9, case_id: 9, volunteer_id: 4},
        {id: 10, case_id: 10, volunteer_id: 5},
        {id: 11, case_id: 11, volunteer_id: 5},
        {id: 12, case_id: 12, volunteer_id: 6},
        {id: 13, case_id: 13, volunteer_id: 6},
        {id: 14, case_id: 14, volunteer_id: 7},
        {id: 15, case_id: 15, volunteer_id: 7},
        {id: 16, case_id: 16, volunteer_id: 8},
        {id: 17, case_id: 17, volunteer_id: 8},
        {id: 18, case_id: 18, volunteer_id: 9},
        {id: 19, case_id: 19, volunteer_id: 9},
        {id: 20, case_id: 20, volunteer_id: 10},
        {id: 21, case_id: 21, volunteer_id: 10},
        
        
      ]);
    });
};
