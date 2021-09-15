const userRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
userRouter.post('/new', async (req, res, next) => {
    const body = req.body

    let passwordHash = bcrypt.hashSync(body.password, 10)

    const newUser = {
        username: body.username,
        name: body.name,
        passwordHash

    }
    const user = new User(newUser)
    try {
        const saveUser = await user.save(newUser)
        res.status(201).json(saveUser)
    }
    catch (error) {
        next(error)
    }

})

userRouter.get('/', async (req, res) => {
    const users = await User.find({}).populate('blogs')
    res.json(users)
})



module.exports = userRouter
