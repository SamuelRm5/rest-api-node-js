
const { Router } = require('express');

// CONTROLLERS
const { getFastfood, 
        getName, 
        postLastname 

    } = require('../controllers/user.controller');

const router = Router();


router.get('/fastFood', getFastfood );

router.put('/name/:id', getName );

router.post('/lastname', postLastname );









module.exports = router;