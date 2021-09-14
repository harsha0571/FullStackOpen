const blogRouter = require('express').Router()
const { result } = require('lodash')
const Blog = require('../models/Blog')

blogRouter.get('/', async (request, response) => {

    const blogs = await Blog.find({})
    response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
    console.log("blog to be posted", blog)

    if (blog.url === undefined || blog.title === undefined) {
        response.status(400).json({ error: 'url or title not provided' })
    }
    else {
        const newBlog = await blog.save()
        response.status(201).json(newBlog)
    }





})

module.exports = blogRouter
