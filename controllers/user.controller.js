const { response : res, request : req } = require('express');

const getFastfood = ( req , res ) => {

    const query = req.query;

    res.json({
        pizza : "🍕🍕",
        burger : "🍔🍔",
        hotDogs : "🌭🌭",
        query
    });
};

const getName = ( req , res ) => {

    const { id } = req.params;

    res.json({
        method : "PUT",
        nombre : "Samuel",
        id
    });
};

const postLastname = ( req , res ) => {
    const body = req.body;

    res.json({
        method : "POST",
        nombre : "Rodríguez",
        body
    });
};


module.exports = {
    getFastfood,
    getName,
    postLastname,
}