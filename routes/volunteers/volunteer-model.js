const db = require('../../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getCases,
  updateVolunteer,
  removeVolunteer
};

function find() {
  return db('volunteers').select('id', 'volunteer_name');
}

function findBy(filter) {
  return db('volunteers').where(filter);
}

async function add(volunteer) {
  const [id] = await db('volunteers').insert(volunteer);

  return findById(id);
}

function findById(id) {
  return db('volunteers')
    .where({ id })
    .first();
}

function getCases(id) {
  return db('connectVolunteers')
    .join('cases', 'connectVolunteers.case_id', 'cases.id')
    .join('volunteers', 'connectVolunteers.volunteer_id', 'volunteers.id')
    .where('volunteers.id', id)
    .select('cases.volunteer_id', 'cases.homie_name', 'cases.current_city', 'cases.last_location', 'cases.hometown', 'cases.sensitive', 'connectVolunteers.volunteer_id', 'volunteers.volunteer_name', 'cases.id')
}

function updateVolunteer(id, changes) {
  return db('volunteers')
  .where({ id })
  .update(changes)
}

function removeVolunteer(id) {
  return db('volunteers')
    .where('id', id)
    .del();
}
