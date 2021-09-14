const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')
const api = supertest(app)
const helper = require('../utils/test_helper')
const intialBlog = helper.intialBlogs
beforeEach(async () => {
    await Blog.deleteMany({})
    const blogObjects = intialBlog
        .map(blog => new Blog(blog))

    const promiseArray = blogObjects.map(blog => {
        blog.save()
        console.log("save")
    })
    await Promise.all(promiseArray)
    console.log("done")
})

test('all blogs are returned as json', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(intialBlog.length)
})

test('verify id ', async () => {
    const res = await api.get('/api/blogs')
    const returnID = () => {
        return res.body[2]
    }
    expect(returnID()).toBeDefined();
})


afterAll(() => {
    mongoose.connection.close()
})