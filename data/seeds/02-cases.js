
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cases').truncate()
    .then(function () {
      // Inserts seed entries  //possibly need a state field 
      return knex('cases').insert([
        {id: 1, volunteer_id: 1, homie_name: 'Alexander Little', current_city: 'Las Vegas', current_state: 'Nevada', last_location: 'Las Vegas Rescue Mission 480 Bonanza Rd', hometown: 'San Jose', sensitive: false},
        {id: 2, volunteer_id: 1, homie_name: 'Janice Elliott', current_city: 'Las Vegas', current_state: 'Nevada', last_location: 'Las Vegas Clark County Library Distric 7060 W. Windmill Lane', hometown: 'San Diego', sensitive: false},
        {id: 3, volunteer_id: 1, homie_name: 'Brett Elliott', current_city: 'Las Vegas', current_state: 'Nevada', last_location: 'Las Vegas Clark County Library Distric 7060 W. Windmill Lane', hometown: 'San Diego', sensitive: false},
        {id: 4, volunteer_id: 2, homie_name: 'Patricia Boyd', current_city: 'Kansas City', current_state: 'Missouri', last_location: 'City Union Mission Family Center 1310 Wabash Ave', hometown: 'Salt Lake City', sensitive: false},
        {id: 5, volunteer_id: 2, homie_name: 'Judith Gibson', current_city: 'Kansas City', current_state: 'Missouri', last_location: '7 Eleven 3150 Gillhan Rd', hometown: 'Pittsburgh', sensitive: false},
        {id: 6, volunteer_id: 3, homie_name: 'Laura Griffin', current_city: 'Portland', current_state: 'Oregon', last_location: 'Rose Haven Day Shelter For Women and Children', hometown: 'New Orleans', sensitive: false},
        {id: 7, volunteer_id: 3, homie_name: 'Margaret Alvarez', current_city: 'Portland', current_state: 'Oregon', last_location: 'Intersection of 14th Ave SW and Montgomery St', hometown: 'Pittsburgh', sensitive: false},
        {id: 8, volunteer_id: 4, homie_name: 'Eric Matthews', current_city: 'Albuquerque', current_state: 'New Mexico', last_location: 'Joy Junction Inc 4500 2nd St SW', hometown: 'New Orleans', sensitive: false},
        {id: 9, volunteer_id: 4, homie_name: 'Crystal Hawkins', current_city: 'Albuquerque', current_state: 'New Mexico', last_location: 'Good Shepherd Center 218 Iron Ave SW', hometown: 'Phoenix', sensitive: false},
        {id: 10, volunteer_id: 5, homie_name: 'Dorothy Palmer', current_city: 'San Francisco', current_state: 'California', last_location: 'Next Door Shelter 1001 Polk St, San Francisco', hometown: 'Scranton', sensitive: false},
        {id: 11, volunteer_id: 5, homie_name: 'Johnny Pierce', current_city: 'San Francisco', current_state: 'California', last_location: 'San Franciso Public Library 100 Larkin Street', hometown: 'Phoenix', sensitive: false},
        {id: 12, volunteer_id: 6, homie_name: 'Timothy Palmer', current_city: 'Memphis', current_state: 'Tennessee', last_location: "McDonald's 905 Union Ave", hometown: 'Scranton', sensitive: false},
        {id: 13, volunteer_id: 6, homie_name: 'Joshua Ramos', current_city: 'Memphis', current_state: 'Tennessee', last_location: 'Wash World 3019 Summer Ave', hometown: 'Detroit', sensitive: false},
        {id: 14, volunteer_id: 7, homie_name: 'Raymond Clark', current_city: 'San Antonio', current_state: 'Texas', last_location: 'Haven For Hope, 1 Haven for Hope Way', hometown: 'Chicago', sensitive: false},
        {id: 15, volunteer_id: 7, homie_name: 'Charles Brewer', current_city: 'San Antonio', current_state: 'Texas', last_location: 'Haven For Hope, 1 Haven for Hope Way', hometown: 'Salt Lake City', sensitive: false},
        {id: 16, volunteer_id: 8, homie_name: 'Carolyn Moreno', current_city: 'NY', current_state: 'New York', last_location: 'Time Square near Broadway theater district', hometown: 'Everett', sensitive: false},
        {id: 17, volunteer_id: 8, homie_name: 'Albert Hamilton', current_city: 'NY', current_state: 'New York', last_location: 'Times Square 42nd St Bus Station', hometown: 'Detroit', sensitive: false},
        {id: 18, volunteer_id: 9, homie_name: 'Victoria Ramos', current_city: 'Memphis', current_state: 'Tennessee', last_location: 'Memphis Union Mission 383 Poplar Ave', hometown: 'NY', sensitive: false},
        {id: 19, volunteer_id: 9, homie_name: 'Ann Ray', current_city: 'Memphis', current_state: 'Tennessee', last_location: 'GreyHound Bus Station 3033 Airways Blvd', hometown: 'Miami', sensitive: false},
        {id: 20, volunteer_id: 10, homie_name: 'Kathryn Vargas', current_city: 'Portland', current_state: 'Oregon', last_location: 'Dignity Village', hometown: 'Everett', sensitive: false},
        {id: 21, volunteer_id: 10, homie_name: 'Jesse Lewis', current_city: 'Portland', current_state: 'Oregon', last_location: 'Dignity Village', hometown: 'Miami', sensitive: false}
      ]);
    });
};
