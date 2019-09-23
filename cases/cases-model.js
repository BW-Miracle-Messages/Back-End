const db = require('../data/db-config.js'); 

module.exports = {
  addCase,
  getCases, 
  getCaseById
};

async function addCase(newCase) {
  const [id] = await db('cases').insert(newCase);

  return findById(id);
}

function findById(id) {
  return db('cases')
    .where({ id })
    .first();
}

function getCases() {
  return db('cases');
}

function getCaseById(id) {
  return db('connectVolunteers')
    .join('cases', 'connectVolunteers.case_id', 'cases.id')
    .join('volunteers', 'connectVolunteer.volunteer_id', 'volunteers.id')
    .where({ id })
    .select('cases.volunteer_id', 'cases.homie_name', 'cases.current_city', 'cases.last_location', 'cases.hometown', 'cases.sensitive')
}
