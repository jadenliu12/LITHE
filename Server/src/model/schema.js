require('../../config.js');
const pgp = require('pg-promise')();

console.log(`process.env.DB_URL ${process.env.DB_URL}`);
db = pgp(process.env.DB_URL);

const schemaSql = `
    CREATE TABLE users (
      user_id    serial PRIMARY KEY NOT NULL,
      username   VARCHAR ( 50 ) UNIQUE NOT NULL,
      email      VARCHAR ( 255 ) UNIQUE NOT NULL
    );

    CREATE TABLE todos (
      user_id    INT NOT NULL,
      weight     INT NOT NULL,
      height     INT NOT NULL,
      calories   INT NOT NULL,
      water      INT NOT NULL,
      sleep      INT NOT NULL      
    );
`;

const dataSql = `
    -- Populate dummy users
    INSERT INTO users (username, email)
    VALUES('jadenliu12','jaden.1012@yahoo.com');

    -- Populate dummy usersinfo
    INSERT INTO usersinfo (user_id, weight, height, calories, water, sleep)
    VALUES(1, 70, 172, 1000, 100, 6);

`;

db.none(schemaSql)
  .then(() => {
    console.log('Schema created');
    db.none(dataSql).then(() => {
      console.log('Data populated');
      pgp.end();
    });
  })
  .catch((err) => {
    console.log('Error creating schema', err);
  });
