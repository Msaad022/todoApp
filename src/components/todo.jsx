import TodoCtxProvider from '../contextsHook/index_TodoCtx'
import Todomod from '../modules/todomod.module.css'
import IndexCreateTodo from "./callbackTodo/index_CreateTodo"
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
                            <Route path="/*" element={<TodoRoute />} />
                            <Route path="/stories" element={<Stories />} />
                        </Routes>
                    </TodoCtxProvider>
                </BrowserRouter>
        </>
    )
}
const TodoRoute = ()=>{
    return(
        <div className={Todomod.Content}><IndexCreateTodo /><IndexEchoTodo/></div>
    )
}
const NavBar = (props) => {
    return(
        <div className={Todomod.navbar}>
            <div>بسم الله الرحمن الرحيم</div>
            <p>dppppppppppppppppppppppppppppppppp</p>
            <div>
                <Link to='/'>Todo</Link>
                <Link to='/stories'>Stories</Link>
            </div>
        </div>
    )
}

export default Todo