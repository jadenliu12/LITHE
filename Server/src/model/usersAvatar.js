if (!global.db) {
    const pgp = require('pg-promise')();
    console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
    db = pgp(process.env.DB_URL);
  }
  
  function list() {
    const sql = `
          SELECT *
          FROM usersavatar      
          ORDER BY user_id DESC
          LIMIT 10
      `;
    return db.any(sql);
  }
  
  function create(user_id, hair, eye, nose, mouth, body) {
    const sql = `
          INSERT INTO usersavatar ($<this:name>)
          VALUES ($<user_id>, $<hair>, $<eye>, $<nose>, $<mouth>, $<body>)
          RETURNING *
      `;
    return db.one(sql, { user_id, hair, eye, nose, mouth, body });
  }
  
  module.exports = {
    list,
    create,
  };