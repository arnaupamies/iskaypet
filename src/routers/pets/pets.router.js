const { Router } = require('express');
const router = Router();
const PetsController = require('../../controllers/pets/pets.controller');

router.get('/pets', PetsController.getAllPets);

router.get('/pets/most_numerous_species', PetsController.getMostNumerousSpecies);

router.get('/pets/species/average_age', PetsController.getAverageAge);

router.get('/pets/:id', PetsController.getOnePet);

router.post('/pets', PetsController.createPet);

module.exports = router;