module.exports.port = process.env.PORT || 3000;
module.exports.host = process.env.HOST || 'localhost';
module.exports.db = process.env.MONGO_URL || 'mongodb://localhost:27017/api';