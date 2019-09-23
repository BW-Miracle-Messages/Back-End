
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('families').truncate()
    .then(function () {
      // Inserts seed entries //added email field 
      return knex('families').insert([
        {case_id: 1, family_name: 'Harry Little', age: 52, relationship: 'Grandfather', current_location: 'Nevada', email: 'hlittle@gmail.com', phone: '812-434-2667'},
        {case_id: 1, family_name: 'Josh Little', age: 22, relationship: 'Brother', current_location: 'Nevada', email: 'jlittle@gmail.com', phone: '812-433-2767'},
        {case_id: 1, family_name: 'Ben Little', age: 24, relationship: 'Brother', current_location: 'Nevada', email: 'blittle@gmail.com', phone: '812-433-2777'},
        {case_id: 2, family_name: 'Michelle Elliot', age: 47, relationship: 'Aunt', current_location: 'Nevada', email: 'michellelle@gmail.com', phone: '780-798-0424'},
        {case_id: 3, family_name: 'Carl Elliot', age: 31, relationship: 'Son', current_location: 'Nevada', email: 'elliotcarl@gmail.com', phone: '741-318-3591'},
        {case_id: 4, family_name: 'Joyce Boyd', age: 62, relationship: 'Grandmother', current_location: 'New Jersey', email: 'none', phone: 'disconnected'},
        {case_id: 5, family_name: 'Kevin Gibson', age: 40, relationship: 'Uncle', current_location: 'Arizona', email: 'unknown', phone: '697-937-0539'},
        {case_id: 5, family_name: 'Kev Gibson', age: 40, relationship: 'Uncle', current_location: 'Arizona', email: 'unknown', phone: '697-927-0539'},
        {case_id: 5, family_name: 'Kevlar Gibson', age: 40, relationship: 'Uncle', current_location: 'Arizona', email: 'unknown', phone: '697-977-0539'},
        {case_id: 6, family_name: 'Ashley Griffin', age: 30, relationship: 'Granddaughter', current_location: 'Portland', email: 'thegriff@gmail.com', phone: '785-347-2022'},
        {case_id: 7, family_name: 'Samuel Alvarez', age: 65, relationship: 'Father', current_location: 'California', email: 'unknown ', phone: '244-599-1256'},
        {case_id: 7, family_name: 'Sammy Alvarez', age: 62, relationship: 'Mother', current_location: 'California', email: 'unknown ', phone: '244-589-1256'},
        {case_id: 8, family_name: 'Linda Matthews', age: 49, relationship: 'Niece',  current_location: 'Utah', email: 'lmatthews2@gmail.com', phone: 'unknown'},
        {case_id: 9, family_name: 'Patrick Hawkins', age: 60, relationship: 'Father', current_location: 'New Mexico', email: 'phawkins@gmail.com', phone: '239-545-4117'},
        {case_id: 10, family_name: 'Judith Palmer', age: 50, relationship: 'Grandmother',  current_location: 'North Carolina', email: 'jpalm50@hotmail.com', phone: '869-985-6177'},
        {case_id: 11, family_name: 'Bobby Pierce', age: 56, relationship: 'Godfather', current_location: 'Florida', email: 'bpierce@gmail.com', phone: '708-868-6153'},
        {case_id: 12, family_name: 'Donna Palmer', age: 43, relationship: 'Mother', current_location: 'California', email: 'donnap@yahoo.com', phone: '309-405-2892'},
        {case_id: 12, family_name: 'Don Palmer', age: 20, relationship: 'Bother', current_location: 'California', email: 'donp@yahoo.com', phone: '309-406-2892'},
        {case_id: 12, family_name: 'Donnie Palmer', age: 21, relationship: 'Sister', current_location: 'California', email: 'donniep@yahoo.com', phone: '309-407-2892'},
        {case_id: 12, family_name: 'Donne Palmer', age: 46, relationship: 'Brother', current_location: 'California', email: 'donne@yahoo.com', phone: '309-408-2892'},
        {case_id: 13, family_name: 'Madison Ramos', age: 36, relationship: 'Goddaughter', current_location: 'Florida', email: 'maddieramos@hotmail.com', phone: 'unknown'},
        {case_id: 13, family_name: 'Maddi Ramos', age: 30, relationship: 'Goddaughter', current_location: 'Florida', email: 'maddiramos@hotmail.com', phone: 'unknown'},
        {case_id: 14, family_name: 'Peter Clark', age: 18, relationship: 'Son', current_location: 'Texas', email: 'thepeterclark@icloud.com', phone: 'disconnected'},
        {case_id: 15, family_name: 'Keith Brewer', age: 38, relationship: 'Nephew', current_location: 'Texas', email: 'thebrewster@gmail.com', phone: 'disconnected' },
        {case_id: 16, family_name: 'Valerie Moreno ', age: 27, relationship: 'Sister', current_location: 'NY', email: 'morenocaro@icloud.com', phone: '708-868-6153'},
        {case_id: 17, family_name: 'Larry Hamilton', age: 35, relationship: 'Cousin', current_location: 'NY', email: 'none', phone: '290-236-7392'},
        {case_id: 17, family_name: 'Laris Hamilton', age: 45, relationship: 'Cousin', current_location: 'Texas', email: 'none', phone: '214-236-7392'},
        {case_id: 18, family_name: 'Jeremy Ramos', age: 25, relationship: 'Nephew', current_location: 'Texas', email: 'makeitramos@gmail.com', phone: '504-233-9191'},
        {case_id: 19, family_name: 'Jean Ray', age: 22, relationship: 'Daughter', current_location: 'South Carolina', email: 'jeanray@ yahoo.com', phone: 'unknown'},
        {case_id: 20, family_name: 'Doris Vargas', age: 70, relationship: 'Mother', current_location: 'Washington', email: 'none', phone: '964-241-6003' },
        {case_id: 20, family_name: 'Jake Vargas', age: 35, relationship: 'Brother', current_location: 'Washington', email: 'none', phone: '964-261-6003' },
        {case_id: 20, family_name: 'Belinda Vargas', age: 80, relationship: 'Grandmother', current_location: 'Washington', email: 'none', phone: '964-221-6003' },
        {case_id: 21, family_name: 'Ann Lewis', age: 29, relationship: 'Daughter', current_location: 'California', email: 'annlewis@yahoo.com', phone: '545-388-9175'}
               
      ]);
    });
};

       
       
        
       
