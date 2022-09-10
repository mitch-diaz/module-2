const express = require('express');
const router = express.Router();
const Animal = require('../../models/Animal');

//  Create route
router.post('/create', (req, res, next) => {
    console.log({req});

    const animalToCreate = {
        ...req.body,
        isMale: !!req.body.isMale,
        isFemale: !!req.body.isFemale
    }

    Animal.create(animalToCreate).then(newlyCreatedAnimal => {
        console.log({newlyCreatedAnimal});
        res.redirect('/animals');
    }).catch(err => {
        console.log({err});
    })
})

//  read route
router.get('/', (req, res, next) => {
    Animal.find()
    .then((animalsFromDb) => {
        console.log({animalsFromDb});

        data = {
            animals: animalsFromDb
        }

        res.render('animals/list', data);

    })
    .catch(err => {
        console.log({err});
    })
})


router.get('/details:animalId', (req, res, next) => {
    console.log({params: req.params.animalId})

    Animal.findById(req.params.animalId).then(animalsFromDb => {
        
    }).catch(err => {console.log({animalsFromDb})})

    res.render('')
})

module.exports = router;