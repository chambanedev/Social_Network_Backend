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