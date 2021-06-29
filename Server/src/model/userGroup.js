if (!global.db) {
    const pgp = require('pg-promise')();
    console.log(`==DEBUG== process.env.DB_URL = ${process.env.DB_URL}`);
    db = pgp(process.env.DB_URL);
  }
  
  function list() {
    const sql = `
          SELECT *
          FROM usersgroup  
          ORDER BY group_id DESC
          LIMIT 10                            
      `;
    return db.any(sql);
  }
  
  function create(group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g, user_h) {
    const sql = `
          INSERT INTO usersgroup ($<this:name>)
          VALUES ($<group_id>, $<user_a>, $<user_b>, $<user_c>, $<user_d>, $<user_e>, $<user_f>, $<user_g>, $<user_h>)
          ON CONFLICT (group_id) DO
          UPDATE SET user_a = $<user_a>, user_b = $<user_b>, user_c = $<user_c>, user_d = $<user_d>, user_e = $<user_e>, user_f = $<user_f>, user_g = $<user_g>, user_h = $<user_h>
          RETURNING *
      `;
    return db.oneOrNone(sql, { group_id, user_a, user_b, user_c, user_d, user_e, user_f, user_g, user_h });
  }
  
  module.exports = {
    list,
    create,
  };