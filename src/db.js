const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./iskaypet.db";

function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
            return console.error(error.message);
            }
    
            createTable(db);
        });
    
        console.log("SQLite database has been created");
        return db;
    }

}

function createTable(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS pets
        (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50) NOT NULL,
            species VARCHAR(50) NOT NULL,
            gender VARCHAR(1) NOT NULL,
            birth_date DATE NOT NULL
        );
    `);
}

module.exports = createDbConnection();