import EchoTodomod from '../../modules/echoTodomod.module.css'
import GetDataTodo from "../getDataTodo"
import TableHead from './echoThead'
import TableBody from './echoTbody'
import Pagination from '../../pagination/pagination'
import { useEffect } from 'react'

let  idDel = []

function EchoTodo () {
    
    const [{deletTodoHandler,updateTodoHandler,isCompletedItem,getTitleStory,removeTitleStory},{todoData}]=  GetDataTodo()
    const [array,pageNumber,pagination] = Pagination(todoData,3)

    const isCheckedOneHandler = (e) => {
        let thisInput = e.target
        thisInput.checked ? idDel[idDel.length] = thisInput.id : idDel = idDel.filter(item => item !== thisInput.id)
        return idDel
    }

    const itsidDel = (setId = idDel) => {
        idDel = setId
        return idDel
    }

    const falseCheckboxHandler = () => {
        let inputsElement = document.getElementsByName('removeTodo')
        inputsElement.forEach( input => {
            input.checked ?  input.checked = false :  null
        })
    }
    useEffect( () => { idDel = [] },[pageNumber])

    return (
        <div className = {EchoTodomod.ParentTable}>
            <table className = {EchoTodomod.TableTodo}>
                <TableHead  falsecheckbox = {falseCheckboxHandler}
                            updatetodo  = {updateTodoHandler} 
                            delettodo   = {deletTodoHandler}
                            iddel       = {itsidDel} />
                <TableBody 
                    gettitlestory = {getTitleStory}
                    removetitlestory={removeTitleStory}
                    tododata= {array}
                    iscompleted= {isCompletedItem}
                    ischeckedone= {isCheckedOneHandler} />
            </table>
            {todoData != '' && pagination}
        </div>
    )
}

export default EchoTodo