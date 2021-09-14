const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')
const api = supertest(app)
const helper = require('../utils/test_helper')
const intialBlog = helper.intialBlogs
beforeEach(async () => {
    await Blog.deleteMany({})
    intialBlog.forEach(async (blog) => {
        let blogObject = new Blog(blog)
        await blogObject.save()
        console.log('save')
    })
    console.log('done')
})

test('all blogs are returned as json', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(intialBlog.length)
})


afterAll(() => {
    mongoose.connection.close()
})