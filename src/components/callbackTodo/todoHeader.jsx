import { useState } from 'react';
import Todomod from '../../modules/todomod.module.css'
import TodoItem from './itemsTodo/todoItem'
import IdUnique from '../../contextsHook/IdUnique'

let takeItFromMe
const TodoHeader = (props) => {

    const initialValues = props.items
    const [Items,setItem] = useState({ dataItems : initialValues })
    const creatItems = () => {
        let idIncrement = IdUnique(Items.dataItems)
        setItem({dataItems:[
                ...Items.dataItems ,{
                    id: idIncrement,
                    text: 'default',
                    isCompleted: false,
                    key: (Math.random() + idIncrement)
                }
            ]
        })
    }

    const updateItems= (index,newValue) => {
        let arr = Items.dataItems
        arr[index].text = newValue.current.value
        setItem({ dataItems : arr })
    }

    const removeItems = (id) => {
        let arr = Items.dataItems
        arr = arr.filter((item,index) => index != id)
        setItem({ dataItems : arr })
        return []
    }
    takeItFromMe = Items
    return (
        <div className={Todomod.Actions}>
            <div className={Todomod.TodoAddItem}>
                <button className='btn btn-primary' onClick={ ()=> creatItems() } >Todo Item</button>
            </div>
            <div className='displayitems'>
                <TodoItem updateitems={updateItems} dataitems={Items} removeitems={removeItems}/>
            </div>
        </div>
    )
}

export const TakeItFromMe = () => {
    return takeItFromMe
}

export default TodoHeader