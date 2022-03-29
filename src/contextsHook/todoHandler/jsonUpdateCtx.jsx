const JsonUpdateCtx = (todos,idUpdated,newValue,takeItFromMe) => {
    
  let arr = todos['todoData']
  const date = new Date();

    for (let x = 0; x < arr.length; x++)
      if(arr[x].id == idUpdated){
        let {dataItems} = takeItFromMe
        arr[x].text = newValue.current.value
        arr[x].update = "Last Updateing : " +  date.toDateString() + ' ' + date.toLocaleTimeString()
        arr[x].items = dataItems
      }

    newValue.current.value = null
    return  arr
  }
  
  export default JsonUpdateCtx