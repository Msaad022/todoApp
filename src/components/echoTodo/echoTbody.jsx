import EchoTodomod from '../../modules/echoTodomod.module.css'
const TableBody= (props) => {

    const isCheckedOneHandler  = props.ischeckedone
    const todoData      = props.tododata
    const isCompletedItem = props.iscompleted
    const getTitleStory = props.gettitlestory
    const removeTitleStory = props.removetitlestory

    const isCompletedhamdler = (e) => {
        let getIndex = e.target.getAttribute('data-index')
        isCompletedItem(getIndex)
    }

    function changeOpacity(e,val) {
        e.target.id == 'titleStory' ?
            e.target.children[0].style.opacity = val :
                e.target.style.opacity = val
    }

    return (
        <>
        <tbody style= {{ minHeight: '250px', wordBreak: 'break-word' }} >{
            todoData == "" ? <DefaultText/> :
            todoData.map( (todo,index) => {
                return (
                    <tr key={todo.id} className={EchoTodomod.firstTr}>
                        <td>
                            <div style={{textAlign: 'left',display: 'flex',alignItems: 'center'}}>
                                
                                <input type="checkbox"
                                    id = {todo.id}
                                    data-count = {index}
                                    onChange= { (event) => isCheckedOneHandler(event) }
                                    name = "removeTodo" />
                                <span onClick= { (e) => alert(todo.created+' , '+todo.update) }>Todo info</span>

                                {todo.storyBool && 
                                    <span className={EchoTodomod.titleStory} id = 'titleStory'
                                        onMouseEnter= {(e) => changeOpacity(e,1) }
                                        onMouseLeave= {(e) => changeOpacity(e,0) }>

                                        <span className={EchoTodomod.removeTitle}
                                            onClick ={ () => removeTitleStory(todo.story)}> X </span>
                                        {getTitleStory(todo.story[1])}
                                    </span>}

                            </div>
                            <p>{todo.text}</p>
                        </td>
                        <td>
                            <table className={EchoTodomod.tableItems}>
                                <tbody>{
                                    todo.items.map((item,length) => {
                                        return (
                                            <tr key={item.key}>
                                                <td>
                                                    <input type="checkbox"
                                                        data-index = {[todo.id,length]}
                                                        defaultChecked = {item.isCompleted}
                                                        onChange = { (e)=> isCompletedhamdler(e) } />
                                                </td>
                                                <td style={item.isCompleted ? {textDecoration: 'line-through'}: null}>{item.text}</td>
                                            </tr>
                                        )
                                    })
                                }</tbody>
                            </table>
                        </td>
                    </tr>
                )
            })
        }</tbody>
        </>
    )
}

const DefaultText = () => { 
    return (
        <tr>
            <td>
                <div className={EchoTodomod.defaultText}> ... دعنا نضيف بعض المهام </div> 
            </td>
        </tr>
    )
}

export default TableBody