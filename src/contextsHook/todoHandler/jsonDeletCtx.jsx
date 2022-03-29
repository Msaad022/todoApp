const JsonDeletCtx = (todos,idDeleted) => {
  
  let arr = todos['todoData'] , x , indexs = []

  for(x in idDeleted){
    arr = arr.filter(
      (item ) => {
        if(item.storyBool == true && item.id == idDeleted[x]){
          indexs.push([item.story[0],item.story[1]])
        }
        return item.id != idDeleted[x]
      }
    )
  }

  return  [arr,indexs]
}


export default JsonDeletCtx