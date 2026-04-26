require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    URL: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}