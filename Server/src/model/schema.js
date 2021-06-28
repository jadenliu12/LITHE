require('../../config.js');
const pgp = require('pg-promise')();

console.log(`process.env.DB_URL ${process.env.DB_URL}`);
db = pgp(process.env.DB_URL);

const schemaSql = `
    CREATE TABLE users (
      username   VARCHAR ( 50 ) UNIQUE NOT NULL,
      email      VARCHAR ( 255 ) UNIQUE NOT NULL
    );

    CREATE TABLE usersinfo (
      username   VARCHAR ( 50 ) PRIMARY KEY NOT NULL,
      weight     INT NOT NULL,
      height     INT NOT NULL,
      calories   INT,
      water      INT,
      sleep      INT      
    );

    CREATE TABLE usersavatar (
      username   VARCHAR ( 50 ) PRIMARY KEY NOT NULL,
      hair       VARCHAR ( 50 ) NOT NULL,
      eye        VARCHAR ( 50 ) NOT NULL,
      nose       VARCHAR ( 50 ) NOT NULL,
      mouth      VARCHAR ( 50 ) NOT NULL,
      body       VARCHAR ( 50 ) NOT NULL      
    );

    CREATE TABLE friends (
      firends_id INT PRIMARY KEY NOT NULL,
      user_a     VARCHAR ( 50 ) NOT NULL,
      user_b     VARCHAR ( 50 ) NOT NULL
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
