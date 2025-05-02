#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name, message) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('Jane', 'Hello Friends!'),
  ('Kathy', 'Surprise World!'),
  ('Zeo', 'We will get there hopefully!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.PGDATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Required for Render's self-signed certs
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  //   console.log("done");
}

main();
