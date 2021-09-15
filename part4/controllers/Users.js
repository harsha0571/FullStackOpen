const userRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
userRouter.post('/new', async (req, res) => {

    const body = req.body
    const passwordHash = await bcrypt.hash(body.password, 10)
    const newUser = {
        username: body.username,
        name: body.name,
        passwordHash

    }
    const user = new User(newUser)
    const saveUser = await user.save(newUser)
    res.status(201).json(saveUser)

})

userRouter.get('/', async (req, res) => {
    const users = await User.find({})
    res.json(users)
})



module.exports = userRouter
