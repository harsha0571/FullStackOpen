var _ = require('lodash');
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let likes = 0
    blogs.forEach(element => {
        likes += element.likes
    });
    return likes
}

const mostLiked = (blogs) => {
    let likes = 0
    const mostLiked = []
    blogs.forEach(element => {

        if (element.likes > likes) {
            likes = element.likes
            mostLiked[1] = element
        }
    })
    if (mostLiked[1] === undefined) {
        return []
    }
    else {
        return mostLiked[1]
    }

}
const mostBlogs = (blogs) => {


    function findOcc(arr, key) {
        let arr2 = [];

        arr.forEach((x) => {

            if (arr2.some((val) => { return val[key] == x[key] })) {

                arr2.forEach((k) => {
                    if (k[key] === x[key]) {
                        k["blogs"]++
                    }
                })

            } else {
                let a = {}
                a[key] = x[key]
                a["blogs"] = 1
                arr2.push(a);
            }
        })

        return arr2
    }

    var authorBlogs = findOcc(blogs, "author")
    var max = 0
    var res = {}
    authorBlogs.forEach(val => {
        if (val.blogs > max) {
            max = val.blogs
            res = val
        }
    })
    console.log(res)
    return res

}
module.exports = { dummy, totalLikes, mostLiked, mostBlogs }


