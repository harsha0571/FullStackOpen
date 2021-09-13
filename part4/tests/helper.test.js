
const listHelper = require('../utils/list_helper')

describe('total likes', () => {

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]
    const listWihtMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '613eeddf97ee4e972fdac8f5',
            title: "harry porter",
            author: "jk rowling ",
            url: "google.com",
            likes: 4,
            __v: 0
        },
        {
            _id: '613eeddf97ee4e972fda4545',
            title: "harry porter",
            author: "jk rowling ",
            url: "gogle.com",
            likes: 7,
            __v: 0
        }
    ]
    test('of emptly list is zero', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    test('of multiple blogs is calculated right', () => {
        const result = listHelper.totalLikes(listWihtMultipleBlogs)
        expect(result).toBe(16)
    })
})

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})
