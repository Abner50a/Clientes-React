const { response, request } = require('express');




const usuarioGet = (req = request, res = response) => {
    const {q, nombre = 'no nombre', apikey,page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });


};

const usuarioPost = (req, res) => {

    //const body = req.body;
    
    const {nombre,edad} = req.body

    res.status(201).json({
        msg: 'post API',
        nombre,
        edad
    });
};


const usuarioPut = (req, res) => {

    const {id} = req.params;

    res.status(400).json({
        msg: 'put API controller',
        id
        
    });
};

const usuarioPatch = (req, res) => {
    res.json({
        msg: 'ppath API'
    });
};

const usuarioDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
}


module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPatch,
    usuarioPut
}