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
module.exports = { dummy, totalLikes, mostLiked }
