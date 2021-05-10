// Importations
const models = require('../models');

// Créer un commentaire
exports.createComment = (req, res) => {
    const comment = {
        postId: req.body.postId,
        userId: req.body.userId,
        content: req.body.content
    }

    models.Comment.create(comment)
    .then(result => {
        res.status(201).json({
            message: "Comment created successfully !",
            comment: result
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong !',
            error: error
        });
    });
}

// Voire un commentaire :id
exports.showComment = (req, res) => {
    const id = req.params.id;
    
    models.Comment.findByPk(id)
    .then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'Comment not found !'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something wen wrong !'
        })
    });
}