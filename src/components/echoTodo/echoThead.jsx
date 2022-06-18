import { useState } from 'react'

// Global variables 
let sendDeletTodo ,checked = false , requestUpdateTodoHandler ,itsidDel

const TableHead = ({iddel, delettodo, falsecheckbox, classes, updatetodo, valuesupdateing}) => {

    itsidDel = iddel
    
    sendDeletTodo = () => {
        let alert = confirm('delete! Are you sure')
        if(alert) {
            let empty = delettodo(itsidDel())
            itsidDel(empty)
        }
    }

    requestUpdateTodoHandler = (props) => {
        let empty = updatetodo(props)
        document.getElementById('createTask').click()
        itsidDel(empty)
        falsecheckbox()
    }

    return (
        <header>
            <ControlTodo classes={classes} updateing={valuesupdateing} />
        </header>
    )
}

const ControlTodo = ({ classes, updateing }) => {

    const checkedAllHandler = (props) => {
        let inputsElement = document.getElementsByName('removeTodo')
        inputsElement.forEach( input => {
            // best solution it took me more than 4 Hours
            ! ( props == input.checked )  ? input.click() :  null
        })
    }

    const isUpdate = () => {
        let textButton = updateing.textTodoButton
        return textButton == 'Todo' ?  true :  false
    }

    const resetHandler = () => {
        checked = false 
        document.getElementById('checkAll').checked= false
    }
    return (
        <div className={classes.headerControll}>
            <div>
                <label className='all-tasks' htmlFor="checkAll">All Tasks</label>
                <input  onChange={ 
                    (e) => {
                        checkedAllHandler(e.target.checked)
                        checked = ! checked }}
                    defaultChecked={checked}
                    type="checkbox"
                    id="checkAll" />
            </div>
            <div>
                <button className='btn btn-success' onClick = { () => {
                    itsidDel().length == 1 && isUpdate()?
                        requestUpdateTodoHandler(itsidDel()) : null
                    resetHandler() 
                }}>edit</button>
            </div>
            <div>
                <button className="btn btn-danger" onClick={ () => {
                    itsidDel().length >= 1 && isUpdate() ? 
                        sendDeletTodo() : null
                    resetHandler()
                }}>remove</button>
            </div>
        </div>
    )
}

export default TableHead