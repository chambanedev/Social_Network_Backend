require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_DEVELOPMENT,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: null,
    database: process.env.DB_PRODUCTION,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
}
