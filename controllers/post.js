// Import
const models = require('../models');

// Créer un Post
exports.createPost = (req, res) => {
    const post = {
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
        imgUrl: req.body.imageUrl
    }

    models.Post.create(post)
    .then(result => {
        res.status(201).json({
            message: 'Post created successfully !',
            post: result
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Something went wrong !',
            error: error
        });
    });
} 