import react , { useEffect, useState} from "react"
import IdUnique from "./IdUnique"
import JsonAddCtx from "./todoHandler/jsonAddCtx"
import JsonDeletCtx from "./todoHandler/jsonDeletCtx"
import JsonUpdateCtx from "./todoHandler/jsonUpdateCtx"
import ItemIsCompleted from "./listTodoHandler/isCompleted"
import { TakeItFromMe } from "../components/callbackTodo/todoHeader"
import storageClass from '../localStorage/storageclass'
import EditStory from "./storiesHandler/editStory"
// Create Global Context
export const TodoCtxHook = react.createContext(0)
TodoCtxHook.displayName  = 'Todo Context'

let idUpdate = ''

const TodoCtxProvider = (props) => {

    // let initialValues = [{
    //     id: 1,
    //     story: [1,1],
    //     storyBool: true,
    //     created: 'Tue Feb 01 2022 2:08:52 PM' ,
    //     update: 'No Update Yet ^_^' ,
    //     text: 'غسل الفضاء من الاتربه',
    //     items: [{
    //             id: 1 ,
    //             text: 'استئجار مركبه فضائيه',
    //             isCompleted: true,
    //             key: 1 +64},
    //         {id: 1 ,
    //         text: 'الصعود للفضاء',
    //         isCompleted: false,
    //         key: 1 +65
    //     }]
    // }];

    let initialValues = []

    let initialStorage = storageClass.isfound('todoData',initialValues)
    const [todosCnt,setTodoData] = useState({todoData: initialStorage})
    // ----------------------
    const initialValuesUpdate = { textTodoButton:'Todo', valueTitle:'', valueTextarea: '', valueItems: '' }
    const [updateValue,setUpdateValue] = useState({valuesUpdateing:initialValuesUpdate})
    // ----------------------
    const initialValuesStories = storageClass.isfound('stories', [{ id: 1, title: "Change title", todos: [] }])
    const [valState,setValState] = useState({stories: initialValuesStories })

    //-------------------- Todo Handler -----------

    const resetTodoHandler = (indexs) => {
        let x
        let arr = todosCnt['todoData']
        for(x in indexs){
            for(let l in arr ){
                if(indexs[x] == arr[l].id){
                    arr[l].story = []
                    arr[l].storyBool = false
                }
            }
        }
        return arr
    }

    const deletTodoHandler = (idDeleted) => {
        let [arr,indexs] = JsonDeletCtx(todosCnt,idDeleted)
        setTodoData({todoData: arr })
        indexs != '' && setValState({stories: EditStory(valState['stories'],indexs) })
        return []
    }

    const updateTodoHandler = (idUpdated) => {
        let arr = todosCnt['todoData'] ,oldTitle='', oldText= '',items
        idUpdate =  idUpdated[0]
        for (let i = 0; i < arr.length; i++)
            if(arr[i].id ==  idUpdate){
                items = arr[i].items
                oldTitle = arr[i].title || 'Change Title'
                oldText = arr[i].text
            }

        setUpdateValue({valuesUpdateing : { textTodoButton: 'update', valueTitle: oldTitle, valueTextarea: oldText, valueItems: items }})
        return []
    }

    const setTodoHandler = (titleProps, textProps) => {
        let word = updateValue.valuesUpdateing.textTodoButton
        if(word == "update"){

            let takeItFromMe = TakeItFromMe()
            setTodoData({todoData:JsonUpdateCtx(todosCnt,idUpdate,titleProps,textProps,takeItFromMe)})
            setUpdateValue({valuesUpdateing: initialValuesUpdate })
        }else{

            let idIncrement = IdUnique(todosCnt.todoData)
            setTodoData({todoData:[
                    ...todosCnt.todoData ,
                    JsonAddCtx(titleProps,textProps,idIncrement)
                ]
            })
        }
    }

    const isCompletedItem = (index) => {
        setTodoData({todoData:ItemIsCompleted(todosCnt,index)})
    }

    const getTitleStory = (index) => {
        let arr = valState.stories
        for(let x in arr){
            if(index == arr[x].id){
                return arr[x].title
            }
        }
    }

    const removeTitleStory = (index) => {
        setValState({stories: EditStory(valState['stories'],[index]) })
        setTodoData({todoData: resetTodoHandler([ index[0] ]) })
    }

    //-------------------- Stories Handler -----------
    const creatStoryHandler = () => {
        let idIncrement = IdUnique(valState.stories);
        setValState({
            stories: [
                ...valState.stories,
                {
                    id: idIncrement,
                    title: "Change title",
                    todos: []
                }
            ]
        });
    };

    const changeTitleHandler = (e) => {
        let textChange = prompt("Hellow , Change Story Title ^_^ ");
        let index = e.target.getAttribute("data-index");
        let arr = valState.stories;

        if (textChange != null && textChange != "") {
            arr[index].title = textChange;
            setValState({ stories: arr });
        }
    };

    const removeStoriesHandler = (e) => {
        let element = e.target;
        let arr = valState.stories;
        if (element.checked) {
            setTimeout(() => {
                let booleanConfirm = confirm("Are you sure you want to delete this story");
                if (booleanConfirm) {
                    setTodoData({todoData: resetTodoHandler(arr[element.id].todos) })
                    arr = arr.filter((item, index) => index != element.id);
                    setValState({ stories: arr });
                } else {
                    element.checked = false
                }
            }, 50);
        }
    };

    const addTodoStory = (arrIDs,indexStory) => {
        let array =  todosCnt.todoData
        let arrayStory = valState.stories
        for(let n in arrayStory){
            if(indexStory == arrayStory[n].id){
                arrayStory[n].todos.push(...arrIDs)
            }
        }
        for (let x in arrIDs) {
            for(let i in array){
                if(array[i].id == arrIDs[x])
                    array[i].storyBool = true
            }
        }
        setValState({ stories: arrayStory});
        setTodoData({todoData:array})
    }

    //-------------------- Data export -----------
    const storiesHandler =  {
        creatStoryHandler ,
        changeTitleHandler ,
        removeStoriesHandler,
        addTodoStory,
        valState
    }

    const values = {
        data :{
            todosCnt,
            handlerDataTodo :{
                setTodoHandler,
                deletTodoHandler,
                updateTodoHandler,
                isCompletedItem,
                getTitleStory,
                removeTitleStory
            },
            storiesHandler,
            updateValue
        }
    }

    useEffect( () => {
        storageClass.setlocalstorge('todoData', todosCnt.todoData)
    },[todosCnt])

    useEffect( () => {
        storageClass.setlocalstorge('stories',valState.stories)
    },[valState])

    return(
        <TodoCtxHook.Provider value={values}>
            {props.children}
        </TodoCtxHook.Provider>
    )
}

export default TodoCtxProvider
