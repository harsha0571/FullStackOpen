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

blogRouter.delete('/:id', async (req, res, next) => {

    try {
        const result = await Blog.findByIdAndRemove(req.params.id)
        res.status(204).end()
    }
    catch (error) {
        next(error)
    }

})
blogRouter.put('/:id', async (req, res, next) => {
    var query = { _id: req.params.id }
    try {
        await Blog.findOneAndUpdate(query, req.body, { new: true, runValidators: true, context: 'query' })
        res.send("created succesfully")
    } catch (err) {
        next(err)
    }



})

module.exports = blogRouter
