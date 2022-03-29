const IdUnique = (arr) => {
    let increment = arr.length != 0 ? arr[arr.length -1].id : 0
    return increment + 1
}

export default IdUnique