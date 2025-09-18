const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './users.db';
const db = new sqlite3.Database(DB_PATH);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);
});

module.exports = {
  getUser: (username) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  }),
  createUser: (username, password) => new Promise((resolve, reject) => {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
      if (err) reject(err);
      else resolve(true);
    });
  })
};
