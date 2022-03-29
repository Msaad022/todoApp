import { useContext ,useEffect } from "react";
import { TodoCtxHook } from "../contextsHook/index_TodoCtx";

const GetDataTodo = () => {

    const {data} = useContext(TodoCtxHook)

    return  [       data.handlerDataTodo,
                data.todosCnt,
            data.updateValue,
        data.storiesHandler
    ]
}

export default GetDataTodo