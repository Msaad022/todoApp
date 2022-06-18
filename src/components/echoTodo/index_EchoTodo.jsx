import EchoTodomod from '../../modules/echoTodomod.module.css'
import GetDataTodo from "../getDataTodo"
import TableHead from './echoThead'
import TableBody from './echoTbody'
import Pagination from '../../pagination/pagination'
import { useEffect } from 'react'

let  idDel = []

function EchoTodo () {
    
    const [{deletTodoHandler,updateTodoHandler,isCompletedItem,getTitleStory,removeTitleStory},{todoData},{valuesUpdateing}]=  GetDataTodo()
    const [array,pageNumber,pagination] = Pagination(todoData,15)

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
        <div>
            <section className = {EchoTodomod.TableTodo}>
                <TableHead  falsecheckbox = {falseCheckboxHandler}
                            updatetodo  = {updateTodoHandler} 
                            delettodo   = {deletTodoHandler}
                            classes={EchoTodomod}
                            valuesupdateing={valuesUpdateing}
                            iddel       = {itsidDel} />
                <TableBody 
                    gettitlestory = {getTitleStory}
                    removetitlestory={removeTitleStory}
                    tododata= {array}
                    iscompleted= {isCompletedItem}
                    classes={EchoTodomod}
                    ischeckedone= {isCheckedOneHandler} />
            </section>
            {todoData != '' && pagination}
        </div>
    )
}

export default EchoTodo