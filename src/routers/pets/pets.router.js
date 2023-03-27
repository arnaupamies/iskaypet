const { Router } = require('express');
const router = Router();
const PetsController = require('../../controllers/pets/pets.controller');


router.get('/pets', (req, res) => {
    /*
        #swagger.description = "Get a list of all pets."
    */

    PetsController.getAllPets(req, res);    
});

router.get('/pets/most_numerous_species', (req, res) => { 
    /*
        #swagger.description = "Get the most numerous species."

        #swagger.responses[200] = {
            description: "OK",
            schema: [{
                "species": "Cat"
            }]
        }
    */

    PetsController.getMostNumerousSpecies(req, res);
});

router.get('/pets/species/average_age', (req, res) => {
    /*
        #swagger.description = "Get the average age of all pets of specific species."

        #swagger.parameters['species'] = {
            in: 'query',
            description: 'Species name',
            required: true
        }

        #swagger.responses[200] = {
            description: "OK",
            schema: [{
                "average": 5
            }]
        }
    */


     PetsController.getAverageAge(req, res);
});

router.get('/pets/:id', (req, res) => {
    /*
        #swagger.description = "Get a single pet by ID."

        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Pet ID',
            required: true
        }

        #swagger.responses[200] = {
            description: "OK",
            schema: { 
                "name": "any",
                "species": "any",
                "gender": "any",
                "birth_date": "any"
            }
        }
    */
    
    PetsController.getOnePet(req, res);
});

router.post('/pets', (req, res) => { 
    /*
        #swagger.description = "Insert new pet."
    */

    PetsController.createPet(req, res);
});

module.exports = router;