if (!global.db) {
  const pgp = require('pg-promise')();
  console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
  db = pgp(process.env.DB_URL);
}

function list() {
  const sql = `
        SELECT *
        FROM users      
        ORDER BY user_id DESC
        LIMIT 10
    `;
  return db.any(sql);
}

function create(username, email) {
  console.log("enter model");
  const sql = `
        INSERT INTO users ($<this:name>)
        VALUES ($<username>, $<email>)
        ON CONFLICT DO NOTHING
        RETURNING *
    `;
  return db.one(sql, { username, email });
}

module.exports = {
  list,
  create,
};