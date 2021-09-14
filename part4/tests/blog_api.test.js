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
        return res.body[0]
    }
    expect(returnID()).toBeDefined();
})
test('verify post blog', async () => {
    const newBlog = {
        title: "hung",
        author: "nure",
        url: "google.com",
        likes: 89
    }

    const res = await api.post('/api/blogs')
        .send(newBlog)
        .expect(201)

    const newBlogs = await helper.blogsInDb()
    expect(newBlogs).toHaveLength(intialBlog.length + 1)
}, 10000)

afterAll(() => {
    mongoose.connection.close()
})