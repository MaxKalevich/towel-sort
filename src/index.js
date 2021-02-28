
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    let newArray = matrix.map((el, index) => {
        if (index % 2 !== 0 && index !== 0) {
            el.reverse()
        }
        return el
    })

    return newArray.flat()
}
