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
}, 100000)

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

test('verify post likes is 0 by default if none mentioned ', async () => {
    const newBlog = {
        title: "hungli",
        author: "nureia",
        url: "google.com",
    }

    const res = await api.post('/api/blogs')
        .send(newBlog)
        .expect(201)


    expect(res.body.likes).toBe(0)
}, 10000)

test('verify if post body has tile and url', async () => {
    const newBlog = {
        author: "nureia"
    }
    const res = await api.post('/api/blogs')
        .send(newBlog)

    expect(res.status).toBe(400)

}, 10000)

test('verify if after token auth is working', async () => {
    const token = helper.token
    const newblog = {
        title: "shiva trioloy the end 3453545",
        author: "amish continued",
        url: "amish.com",
        likes: "232",
        userID: "6142fed9f529ad16d120b8aa"
    }
    const res = await api.post('./api/blogs')
        .set({ Authorization: token })
        .send(newblog)
        .expect(201)

    expect(res.body).toEqual(newBlog)
})


afterAll(() => {
    mongoose.connection.close()
})