
const Blog = require('../models/Blog')
const token = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkYXJzaCIsImlkIjoiNjE0MmZlZDlmNTI5YWQxNmQxMjBiOGFhIiwiaWF0IjoxNjMxNzgwNzY5fQ.XtWtS3zWKsrQ5XZrnQpWV13N2yhMDomh6KRHw-1ZRL8"
const intialBlogs = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        "userID": "6142fed9f529ad16d120b8aa"
    },
    {
        title: "harry porter",
        author: "jk rowling ",
        url: "google.com",
        likes: 8,
        "userID": "6142fed9f529ad16d120b8aa"
    },
    {
        title: "hunger games ",
        author: "not sure",
        url: "google.com",
        likes: 2,
        "userID": "6142fed9f529ad16d120b8aa"
    },
    {
        title: "riverdale",
        author: "no one wants to know ",
        url: "google.com",
        likes: 7,
        "userID": "6142fed9f529ad16d120b8aa"
    },
    {
        title: "fairytale",
        author: "manga writer",
        url: "gogle.com",
        likes: 7,
        "userID": "6142fed9f529ad16d120b8aa"
    }
]

const intialUsers = [
    {
        username: "shiv98",
        name: "namet",
        password: "genshin"
    },
    {
        username: "shiv986",
        name: "nametde",
        password: "genshin232"
    },
    {
        username: "shiv987",
        name: "namet232",
        password: "genshinrere"
    }
]
const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}


module.exports = {

    intialBlogs, blogsInDb, intialUsers, token
}