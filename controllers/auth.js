// Dépendances
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// Importation
const models = require('../models');


// Enregistrer un User
exports.register = (req, res) => {
    // Si l'email éxiste dans la bd
    models.User.findOne({where: {email:req.body.email}})
    .then(result => {
        if(result){
            res.status(409).json({
                    message: 'Email already exist !'
                });
        } else {
            // Hashage et Salage du MDP
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hashPassword){
                    const newUser = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: hashPassword,
                        biography: req.body.biography,
                        isAdmin: 0
                    }
                
                    // Création de l'user
                    models.User.create(newUser)
                    .then(result => {
                        res.status(201).json({
                            message: 'User created successfully !',
                            user: newUser
                        });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'Something wen wrong !'
                        });
                    });
                });
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong !'
        });
    });
}

// Connectexion d'un user
exports.login = (req, res) => {
    // Vérification que l'email éxiste dans la BD
    models.User.findOne({where: {email: req.body.email}})
    .then(user => {
        if(user === null){
            res.status(401).json({
                message: 'Invalid credentials !'
            });
        } else {
            // Comparaison du MDP et du hash stocké dans la BD
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    // Livraison du token et permission
                    const token = jwt.sign(
                        { 
                            email: user.email,
                            userId: user.id
                        },
                        process.env.JWT_KEY,
                        {expiresIn: '24h'},
                        function(err, token){
                            res.status(200).json({
                                message: "Authentification successful !",
                                token: token
                            });
                        });
                }else{
                    res.status(401).json({
                        message: "Invalid credentials!"
                    });
                }
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong !'
        });
    });
}