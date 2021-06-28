if (!global.db) {
    const pgp = require('pg-promise')();
    console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
    db = pgp(process.env.DB_URL);
  }
  
  function list() {
    const sql = `
          SELECT *
          FROM usersinfo      
          ORDER BY user_id DESC
          LIMIT 10
      `;
    return db.any(sql);
  }
  
  function create(user_id, weight, height, calories, water, sleep) {
    const sql = `
          INSERT INTO usersinfo ($<this:name>)
          VALUES ($<user_id>, $<weight>, $<height>, $<calories>, $<water>, $<sleep>)
          RETURNING *
      `;
    return db.one(sql, { user_id, weight, height, calories, water, sleep });
  }
  
  module.exports = {
    list,
    create,
  };