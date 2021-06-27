if (!global.db) {
  const pgp = require('pg-promise')();
  console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
  db = pgp(process.env.DB_URL);
}

function create(username, password, email) {
  const sql = `
        INSERT INTO users ($<this:name>)
        VALUES ($<username>, $<password>, $<email>)
        RETURNING *
    `;
  return db.one(sql, { username, password, email });
}

module.exports = {
  create,
};