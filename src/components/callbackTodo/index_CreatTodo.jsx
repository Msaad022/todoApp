import TodoHeader from "./todoHeader"
import TodoSection from "./todoSection"
import Todomod from '../../modules/todomod.module.css'
import GetDataTodo from "../getDataTodo"

const CreatTodo = (props) => {

    const [{},{},{valuesUpdateing}] = GetDataTodo()
    const getItems = valuesUpdateing.valueItems

    return (
        <>
            <div className={Todomod.TodoMine}>
                <header>
                    { valuesUpdateing.textTodoButton == 'update' ? <TodoHeader items={getItems}/> :null }
                </header>
                <section><TodoSection/></section>
            </div>
        </>
    )
}

export default CreatTodo