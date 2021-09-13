require('dotenv').config()

const PORT = 3003 || process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    PORT,
    MONGODB_URI
}