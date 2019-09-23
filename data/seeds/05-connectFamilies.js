
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('connectFamilies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('connectFamilies').insert([
        {id: 1, family_id: 1, case_id: 1},
        {id: 2, family_id: 2, case_id: 2},
        {id: 3, family_id: 3, case_id: 3},
        {id: 4, family_id: 4, case_id: 4},
        {id: 5, family_id: 5, case_id: 5},
        {id: 6, family_id: 6, case_id: 6},
        {id: 7, family_id: 7, case_id: 7},
        {id: 8, family_id: 8, case_id: 8},
        {id: 9, family_id: 9, case_id: 9},
        {id: 10, family_id: 10, case_id: 10},
        {id: 11, family_id: 11, case_id: 11},
        {id: 12, family_id: 12, case_id: 12},
        {id: 13, family_id: 13, case_id: 13},
        {id: 14, family_id: 14, case_id: 14},
        {id: 15, family_id: 15, case_id: 15},
        {id: 16, family_id: 16, case_id: 16},
        {id: 17, family_id: 17, case_id: 17},
        {id: 18, family_id: 18, case_id: 18},
        {id: 19, family_id: 19, case_id: 19},
        {id: 20, family_id: 20, case_id: 20},
        {id: 21, family_id: 21, case_id: 21}
      ]);
    });
};
