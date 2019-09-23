
exports.up = function(knex) {
    return knex.schema

        // volunteers - volunteer profiles 
        .createTable('volunteers', tbl => {
            tbl.increments();
            tbl
                .text('volunteer_name')
                .unique()
                .notNullable();
            tbl
                .text('password')
                .notNullable();
        })
        
        // cases - homie cases  
        .createTable('cases', tbl => {
            tbl.increments();
            tbl
                .integer('volunteer_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('volunteers')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .string('homie_name')
                .notNullable();
            tbl
                .string('current_city')
                .notNullable();
            
            tbl
                .string('current_state')
                .notNullable();
            
            tbl
                .string('last_location')
                .notNullable();
            tbl
                .text('hometown'); 
            tbl
                .boolean('sensitive')
                .default(false)
        
        })

        // families - family member info 
        .createTable('families', tbl => {
            tbl.increments();
            tbl
                .text('family_name')
                .unique()
                .notNullable();
            tbl 
                .integer('age')
                .unsigned();
            tbl 
                .text('relationship')
                .notNullable();
            tbl 
                .text('current_location')
                .notNullable(); 

            tbl 
                .string('email')
            
            tbl 
                .text('phone')
        })

        // connectVolunteers - table of ints that reference each other (case_id and volunteer_id)
        .createTable('connectVolunteers', tbl => {
            tbl.increments();
            tbl
                .integer('case_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cases')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .integer('volunteer_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('volunteers')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        // connectFamilies - table of ints that reference each other (family_id and case_id)
        .createTable('connectFamilies', tbl => {
            tbl.increments();
            tbl
                .integer('family_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('families')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .integer('case_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cases')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('connectFamilies')
        .dropTableIfExists('connectVolunteers')
        .dropTableIfExists('families')
        .dropTableIfExists('cases')
        .dropTableIfExists('volunteers');
};
