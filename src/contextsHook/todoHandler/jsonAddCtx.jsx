const JsonAddCtx = (titleProps, textProps, increment) => {

    const date = new Date();
    let dataList = {
        id : increment,
        story: [],
        storyBool: false,
        created : "Time : " +  date.toDateString() + ' ' + date.toLocaleTimeString(),
        update : 'No Update Yet ^_^' ,
        title: titleProps.current.value,
        text : textProps.current.value,
        items: []
    }

    titleProps.current.value = null
    textProps.current.value = null
    return dataList
}

export default JsonAddCtx