
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('families').truncate()
    .then(function () {
      // Inserts seed entries //added email field 
      return knex('families').insert([
        {id: 1, family_name: 'Harry Little', age: 52, relationship: 'Grandfather', current_location: 'Nevada', email: 'hlittle@gmail.com', phone: '812-434-2667' },
        {id: 2, family_name: 'Michelle Elliot', age: 47, relationship: 'Aunt', current_location: 'Nevada', email: 'michellelle@gmail.com', phone: '780-798-0424' },
        {id: 3, family_name: 'Carl Elliot', age: 31, relationship: 'Son', current_location: 'Nevada', email: 'elliotcarl@gmail.com', phone: '741-318-3591' },
        {id: 4, family_name: 'Joyce Boyd', age: 62, relationship: 'Grandmother', current_location: 'New Jersey', email: 'none', phone: 'disconnected'},
        {id: 5, family_name: 'Kevin Gibson', age: 40, relationship: 'Uncle', current_location: 'Arizona', email: 'unknown', phone: '697-977-0539'},
        {id: 6, family_name: 'Ashley Griffin', age: 30, relationship: 'Granddaughter', current_location: 'Portland', email: 'thegriff@gmail.com', phone: '785-347-2022'},
        {id: 7, family_name: 'Samuel Alvarez', age: 65, relationship: 'Father', current_location: 'California', email: 'unknown ', phone: '244-599-1256'},
        {id: 8, family_name: 'Linda Matthews', age: 49, relationship: 'Niece',  current_location: 'Utah', email: 'lmatthews2@gmail.com', phone: 'unknown'},
        {id: 9, family_name: 'Patrick Hawkins', age: 60, relationship: 'Father', current_location: 'New Mexico', email: 'phawkins@gmail.com', phone: '239-545-4117'},
        {id: 10, family_name: 'Judith Palmer', age: 50, relationship: 'Grandmother',  current_location: 'North Carolina', email: 'jpalm50@hotmail.com', phone: '869-985-6177'},
        {id: 11, family_name: 'Bobby Pierce', age: 56, relationship: 'Godfather', current_location: 'Florida', email: 'bpierce@gmail.com', phone: '708-868-6153'},
        {id: 12, family_name: 'Donna Palmer', age: 43, relationship: 'Mother', current_location: 'California', email: 'donnap@yahoo.com', phone: '309-405-2892'},
        {id: 13, family_name: 'Madison Ramos', age: 36, relationship: 'Goddaughter', current_location: 'Florida', email: 'maddieramos@hotmail.com', phone: 'unknown'},
        {id: 14, family_name: 'Peter Clark', age: 18, relationship: 'Son', current_location: 'Texas', email: 'thepeterclark@icloud.com', phone: 'disconnected'},
        {id: 15, family_name: 'Keith Brewer', age: 38, relationship: 'Nephew', current_location: 'Texas', email: 'thebrewster@gmail.com', phone: 'disconnected' },
        {id: 16, family_name: 'Valerie Moreno ', age: 27, relationship: 'Sister', current_location: 'NY', email: 'morenocaro@icloud.com', phone: '708-868-6153'},
        {id: 17, family_name: 'Larry Hamilton', age: 35, relationship: 'Cousin', current_location: 'NY', email: 'none', phone: '290-236-7392'},
        {id: 18, family_name: 'Jeremy Ramos', age: 25, relationship: 'Nephew', current_location: 'Texas', email: 'makeitramos@gmail.com', phone: ''},
        {id: 19, family_name: 'Jean Ray', age: 22, relationship: 'Daughter', current_location: 'South Carolina', email: 'jeanray@ yahoo.com', phone: 'unknown'},
        {id: 20, family_name: 'Doris Vargas', age: 70, relationship: 'Mother', current_location: 'Washington', email: 'none', phone: '964-261-6003' },
        {id: 21, family_name: 'Ann Lewis', age: 29, relationship: 'Daughter', current_location: 'California', email: 'annlewis@yahoo.com', phone: '545-388-9175'}
               
      ]);
    });
};

       
       
        
       
