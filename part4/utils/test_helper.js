
const Blog = require('../models/Blog')
const intialBlogs = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
    },
    {
        title: "harry porter",
        author: "jk rowling ",
        url: "google.com",
        likes: 8
    },
    {
        title: "hunger games ",
        author: "not sure",
        url: "google.com",
        likes: 2
    },
    {
        title: "riverdale",
        author: "no one wants to know ",
        url: "google.com",
        likes: 7
    },
    {
        title: "fairytale",
        author: "manga writer",
        url: "gogle.com",
        likes: 7
    }
]
const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}


module.exports = {

    intialBlogs, blogsInDb
}