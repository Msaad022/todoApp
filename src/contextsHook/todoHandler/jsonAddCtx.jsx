const JsonAddCtx = (props,increment) => {

    const date = new Date();
    let dataList = {
        id : increment,
        story: [],
        storyBool: false,
        created : "Time : " +  date.toDateString() + ' ' + date.toLocaleTimeString(),
        update : 'No Update Yet ^_^' ,
        text : props.current.value,
        items: []
    }

    props.current.value = null
    return dataList
}

export default JsonAddCtx