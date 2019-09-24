const db = require('../../data/db-config'); 

module.exports = {
  addCase,
  updateFamilyMember, 
  addFamilyMember, 
  getCases, 
  getCaseById,
  findById,
  updateCase,
  removeCase,
  getFamilyMembers, 
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

function updateCase(id, changes) {
  return db('cases')
  .where({ id })
  .update(changes)
}

function removeCase(id) {
  return db('cases')
    .where('id', id)
    .del();
}

function getFamilyMembers(id) {
  return db('families')
    .where('case_id', id)
}

async function addFamilyMember(newFamily) {
  const [id] = await db('families').insert(newFamily);

  return db('families')
    .where({ id })
    .first();
}

function updateFamilyMember(id, changes) {
  return db('families')
  .where({ id })
  .update(changes)
}