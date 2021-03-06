// Imporations
const multer = require('multer');

// Bibliothèque d'éxtension
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif':'gif'
};

// Enregistrement des images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => { // Nom pour les images
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
      cb(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('image');