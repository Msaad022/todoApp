const ItemIsCompleted = (todo,index) => {
    
    index = index.split(',')
    let arr = todo.todoData
    let x

    for(x in arr)
        if( arr[x].id == index[0] ){
            let completed =  arr[x].items[index[1]].isCompleted
            arr[x].items[index[1]].isCompleted = ! completed
        }
    return arr
}

export default ItemIsCompleted