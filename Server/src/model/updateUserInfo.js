if (!global.db) {
    const pgp = require('pg-promise')();
    db = pgp(process.env.DB_URL);
  }

function create(username, cal, sleep, water) {
    const sql = `
            UPDATE usersinfo
            SET calories = $2, sleep = $3, water = $4
            WHERE username = '$1'
            RETURNING *
        `;
    return db.one(sql, [username, cal, sleep, water]);
}

module.exports = {
    create,
};
  