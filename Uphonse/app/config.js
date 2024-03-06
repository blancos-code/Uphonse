const path = require('path');

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/Uphonse',
    viewsDir: path.join(__dirname, 'views'),
    publicDir: path.join(__dirname, 'public'),
};