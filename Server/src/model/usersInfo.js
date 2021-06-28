if (!global.db) {
    const pgp = require('pg-promise')();
    console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
    db = pgp(process.env.DB_URL);
  }
  
  function list() {
    const sql = `
          SELECT *
          FROM usersinfo      
          ORDER BY username DESC
          LIMIT 10
      `;
    return db.any(sql);
  }
  
  function create(username, weight, height) {
    const sql = `
          INSERT INTO usersinfo ($<this:name>)
          VALUES ($<username>, $<weight>, $<height>)
          RETURNING *
      `;
    return db.one(sql, { username, weight, height});
  }
  
  module.exports = {
    list,
    create,
  };