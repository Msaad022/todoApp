import TodoCtxProvider from '../contextsHook/index_TodoCtx'
import Todomod from '../modules/todomod.module.css'
import IndexCreatTodo from "./callbackTodo/index_CreatTodo"
import IndexEchoTodo from './echoTodo/index_EchoTodo'
import Stories from '../stories/stories'
import {
        BrowserRouter,
        Routes,
        Route,
        Link
    } from "react-router-dom";

function Todo () {

    return (
        <>
                <BrowserRouter>
                    <NavBar/>
                    <TodoCtxProvider>
                        <Routes>
                            <Route path="/todo-app/stories" element={<Stories />} />
                            <Route path="/todo-app/*" element={<TodoRoute />} />
                        </Routes>
                    </TodoCtxProvider>
                </BrowserRouter>
        </>
    )
}
const TodoRoute = ()=>{
    return(
        <div className={Todomod.Content}><IndexCreatTodo /><IndexEchoTodo/></div>
    )
}
const NavBar = (props) => {
    return(
        <div className={Todomod.navbar}>
            <div>بسم الله الرحمن الرحيم</div>
            <div>
                <Link to='/todo-app/todo'>Todo</Link>
                <Link to='/todo-app/stories'>Stories</Link>
            </div>
        </div>
    )
}

export default Todo