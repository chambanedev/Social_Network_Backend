 // Importations 
 const bcryptjs = require('bcryptjs');

 // Importations
 const models = require('../models');

 // Voire un user
 exports.showUser = (req, res) => {
    const id = req.params.id;

    models.User.findByPk(id)
    .then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'User not found !'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something wen wrong !'
        })
    });
 }

 // Voire tous les Users
 exports.allUsers = (req, res) => {
    models.User.findAll()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            message: "Something went wrong !"
        });
    });
 }

 // Mise à jour d'un utilisateur
 exports.updateUser = (req, res) => {
    const id = req.params.id;

    const userUpdate = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        biography: req.body.biography
    }

    // bcryptjs.hash(req.body.password, 10)
    // .then (hashPassword => {
        // Add userUpdate
    // })
    // .catch(error => {
    //     res.status(500).json({
    //         message: 'Something went wrong',
    //         error: error
    //     });
    // })
    models.User.update(userUpdate, { where: { id: id}})
    .then(result => {
        res.status(200).json({
            message: 'User updated successfully !',
            User: userUpdate
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
 }

 // Supprimer d'un utilisateur
 exports.deleteUser = (req, res) => {
    const id = req.params.id;

    models.User.destroy({where: {id: id}})
    .then(result => {
        res.status(200).json({
            message: 'User deleted successfully !',
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    })
 }

 