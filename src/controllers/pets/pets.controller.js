const db = require('../../db');

exports.getAllPets = (req, res) => {
    const query = `SELECT * FROM pets`;

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows)
    });
    
}

exports.getOnePet = (req, res) => {
    const query =  `
        SELECT * FROM pets
        WHERE id = ?
    `;

    const params = [
        req.params.id 
    ];

    db.run(query, params, (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows)
    });
}

exports.getMostNumerousSpecies = (req, res) => {
    const query =  `
        SELECT species
        FROM pets
        GROUP BY species
        ORDER BY count(*) DESC
        LIMIT 1
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows)
    });
}

exports.getAverageAge = (req, res) => {
    const query =  `
        SELECT AVG(
            cast(strftime('%Y.%m%d', 'now') - strftime('%Y.%m%d', birth_date) as int)
        ) as 'average' 
        FROM pets
        WHERE species = ?
    `;

    const params = [
        req.query.species
    ];

    if(req.query.species == null) {
        res.status(500).send("Species not specified in request body.");
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows)
    });
}

exports.createPet = (req, res) => {
    const query =  `
        INSERT INTO pets 
        (name, species, gender, birth_date)
        VALUES
        (?, ?, ?, ?)
    `;

    const params = [
        req.body.name, 
        req.body.species, 
        req.body.gender, 
        req.body.birth_date
    ];

    db.run(query, params, (err, rows) => {
        if (err) {
            throw err;
        }

        res.send(rows)
    });
}