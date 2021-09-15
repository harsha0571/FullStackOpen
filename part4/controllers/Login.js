const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
loginRouter.post('/', async (req, res) => {
    const body = req.body
    const user = await User.findOne({ username: body.username })

    const passwordCheck = (user === null)
        ? false
        : bcrypt.compareSync(body.password, user.passwordHash)

    if (!(user && passwordCheck)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }
    const token = jwt.sign(userForToken, process.env.SECRET)
    res.status(200).send({ token, username: user.username, name: user.name })

})

module.exports = loginRouter