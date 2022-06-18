const JsonUpdateCtx = (todos,idUpdated,titleProps,textProps,takeItFromMe) => {
    
  let arr = todos['todoData']
  const date = new Date();

    for (let x = 0; x < arr.length; x++)
      if(arr[x].id == idUpdated){
        let {dataItems} = takeItFromMe
        arr[x].title = titleProps.current.value
        arr[x].text = textProps.current.value
        arr[x].update = "Last Updateing : " +  date.toDateString() + ' ' + date.toLocaleTimeString()
        arr[x].items = dataItems
      }

    titleProps.current.value = null
    textProps.current.value = null

    return  arr
  }
  
  export default JsonUpdateCtx