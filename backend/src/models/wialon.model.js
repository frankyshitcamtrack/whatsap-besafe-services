const pool = require('../config/db');

//besafe contacts
async function getWialonContacts() {
  const result = await pool.query('SELECT * FROM besafe_contacts');
  return result[0];
}

async function getWialonContactByID(number) {
  const result = await pool.query(
    `SELECT * FROM besafe_contacts WHERE number=${number}`
  );
  return result[0];
}


function insertContact(id, number) {
  return pool.query('REPLACE INTO besafe_contacts SET id= ?, number= ?', [
    id,
    number,
  ]);
}

module.exports = { getWialonContacts, insertContact, getWialonContactByID };
