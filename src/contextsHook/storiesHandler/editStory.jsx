function EditStory  (arr,index) {
    
    let x
    for(x in index ){
        for(let n in arr){
            if(index[x][1] == arr[n].id){
                let array = arr[n].todos                
                arr[n].todos = array.filter( item  => item != index[x][0] )
            }
        }
    }

    return arr
}

export default EditStory