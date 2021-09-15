const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/User')
const api = supertest(app)
const helper = require('../utils/test_helper')
const intialUsers = helper.intialUsers

beforeEach(async () => {
    await User.deleteMany({})
    const userObjects = intialUsers
        .map(blog => new User(blog))

    const promiseArray = userObjects.map(user => {
        user.save()
        console.log("save")
    })
    await Promise.all(promiseArray)
    console.log("done")
})

test('when invalid user is created appropriate status and error is returned ', async () => {

    const invalidUser = {
        username: "vi",
        name: 'kjkdjfkj',
        password: "gentei"
    }
    const res = await api.post('/user/new')
        .send(invalidUser)
        .expect(400)

    expect(res.status).toBe(400)
})


afterAll(() => {
    mongoose.connection.close()
})