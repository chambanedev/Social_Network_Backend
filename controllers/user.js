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