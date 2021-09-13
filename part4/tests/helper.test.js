
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
describe('most liked blog', () => {

    const ans = {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        likes: 12
    }
    const listWihtMultipleBlogs = [
        {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        },
        {
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 5
        },
        {
            title: "harry porter",
            author: "jk rowling ",
            likes: 4
        },
        {
            title: "harry porter",
            author: "jk rowling ",
            likes: 7
        }
    ]
    test('for emptly list result is also empty', () => {
        const result = listHelper.mostLiked([])
        expect(result).toEqual([])
    })
    test('for single object it is the object itself', () => {
        const result = listHelper.mostLiked([].concat(ans))
        expect(result).toEqual(ans)
    })
    test('for multiple it is working', () => {
        const result = listHelper.mostLiked(listWihtMultipleBlogs)
        expect(result).toEqual(ans)
    })

})

describe('dummy test ', () => {
    test('dummy returns one', () => {
        const blogs = []

        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})

describe('most blogs of a author', () => {
    const blogs = [
        {
            author: "tren"
        },
        {
            author: "ren"
        },
        {
            author: "tren"
        },
        {
            author: "ren"
        },
        {
            author: "tren"
        },
    ]
    const ans = {
        author: "tren",
        blogs: 3
    }

    test('no entries in blog', () => {

        const result = listHelper.mostBlogs([])
        expect(result).toEqual({})
    })

    test('no of blogs of a author', () => {

        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual(ans)
    })
})
