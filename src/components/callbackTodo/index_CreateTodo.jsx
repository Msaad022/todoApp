import TodoHeader from "./todoHeader"
import TodoSection from "./todoSection"
import Todomod from '../../modules/todomod.module.css'
import GetDataTodo from "../getDataTodo"
import { useState, useRef, useEffect } from "react"

const CreateTodo = () => {

    const [{},{},{valuesUpdateing}] = GetDataTodo()
    const [task, setTask] = useState(false)
    const getItems = valuesUpdateing.valueItems
    const mineRef = useRef()

    useEffect( () => {
        if(task){
            let stoped = setTimeout(() => {
                mineRef.current.style.opacity = 1
            },10)
            return () =>  clearTimeout(stoped)
        }
    },[task])

    const fadeHandler = () => {
        mineRef.current.style.opacity = 0
        let stoped = setTimeout( () => {
            setTask(false)
        },501)

        return () =>  clearTimeout(stoped)
    }
    return (
        <>
        {task && (
            <div className={Todomod.TodoMine} ref={mineRef}>
                <div className={Todomod.cancel} onClick={ () =>  fadeHandler() }>x</div>
                <header>
                    { valuesUpdateing.textTodoButton == 'update' ? <TodoHeader items={getItems}/> :null }
                </header>
                <section><TodoSection/></section>
            </div>
        )}
            <div className={Todomod.Banner}>
                <h1>Todo List</h1>
                <button id="createTask" type="button" onClick={ () => setTask(true) } aria-label="creat task">Create Task</button>
            </div>
        </>
    )}


export default CreateTodo