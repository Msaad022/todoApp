
const TableBody= ({ischeckedone, tododata, iscompleted, gettitlestory, classes, removetitlestory}) => {

    const isCompletedhamdler = (e) => {
        let getIndex = e.target.getAttribute('data-index')
        iscompleted(getIndex)
    }

    function changeOpacity(e,val) {
        e.target.id == 'titleStory' ?
            e.target.children[0].style.opacity = val :
                e.target.style.opacity = val
    }

    let objectElement = {gridOne:[],gridTow:[],gridThere:[],gridFour:[]}

    const SortElment = () => {
        
        tododata.map( ( todo, index) => {
            let contentTask = <ContentTask key={todo.id}
                classes={classes}
                todo={todo}
                index={index}
                ischeckedone={ischeckedone}
                changeOpacity={changeOpacity}
                removetitlestory={removetitlestory}
                gettitlestory={gettitlestory}
                isCompletedhamdler={isCompletedhamdler} />

            let calc = (index/1)%4
            {if(calc == 0) {
                return objectElement.gridOne.push(contentTask)
            }else if(calc == 1){
                return objectElement.gridTow.push(contentTask)
            }else if(calc == 2){
                return objectElement.gridThere.push(contentTask)
            }else{
                return objectElement.gridFour.push(contentTask)
            }}
        })

        return (
            <>
                <div className="GridOne">{objectElement.gridOne}</div>
                <div className="GridTow">{objectElement.gridTow}</div>
                <div className="GridThere">{objectElement.gridThere}</div>
                <div className="GridFour">{objectElement.gridFour}</div>
            </>
        )

    }

    return (
        <>
            <section className={classes.container} >
                {tododata == "" ? <DefaultText classes={ classes }/> : SortElment()  }
            </section>
        </>
    )
}

const ContentTask = ({classes, todo, index, ischeckedone, changeOpacity,
    removetitlestory, gettitlestory, isCompletedhamdler }) =>(
    <div key={todo.id} className={classes.box}>
        <div>
            <div className={classes.headBox}>
                <input type="checkbox"
                    id = {todo.id}
                    data-count = {index}
                    onChange= { (event) => ischeckedone(event) }
                    name = "removeTodo" />
                <span onClick= { (e) => alert(todo.created+' , '+todo.update) }>Todo info</span>

                {todo.storyBool && (
                    <span className={classes.titleStory} id = 'titleStory'
                        onMouseEnter= {(e) => changeOpacity(e,1) }
                        onMouseLeave= {(e) => changeOpacity(e,0) }>

                        <span onClick ={ () => removetitlestory(todo.story)}> X </span>
                        {gettitlestory(todo.story[1])}
                    </span>)}

            </div>
            <div className={classes.titleTask}><p>{todo.title || 'Change Title'}</p></div>
            <div className={classes.textTask}><p>{todo.text}</p></div>
        </div>
        <div className={classes.listTasks}>
            {todo.items.map((item,length) => {
                return (
                    <div key={item.key}>
                        <input type="checkbox"
                            data-index = {[todo.id,length]}
                            defaultChecked = {item.isCompleted}
                            onChange = { (e)=> isCompletedhamdler(e) } />
                        <label style={item.isCompleted ? {textDecoration: 'line-through',background: 'antiquewhite'}: null}>{item.text}</label>
                    </div>
                )
            })
            }
        </div>
    </div>
)

const DefaultText = ({ classes }) => { 
    return (
        <div>
            <div>
                <div className={classes.defaultText}> ... دعنا نضيف بعض المهام </div> 
            </div>
        </div>
    )
}

export default TableBody