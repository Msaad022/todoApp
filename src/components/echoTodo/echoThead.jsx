import { useState } from 'react'

// Global variables 
let sendDeletTodo ,checked = false , requestUpdateTodoHandler ,itsidDel

const TableHead = (props) => {

    const deletTodoHandler =  props.delettodo
    const falseCheckboxHandler = props.falsecheckbox
    const updateTodoHandler = props.updatetodo
    itsidDel = props.iddel

    sendDeletTodo = () => {
        let empty = deletTodoHandler(itsidDel())
        itsidDel(empty)
    }

    requestUpdateTodoHandler = (props) => {
        let empty = updateTodoHandler(props)
        itsidDel(empty)
        falseCheckboxHandler()
    }

    return (
        <thead>
            <ControlTodo />
        </thead>
    )
}

const ControlTodo = (props) => {

    const checkedAllHandler = (props) => {
        let inputsElement = document.getElementsByName('removeTodo')
        inputsElement.forEach( input => {
            // best solution it took me more than 4 Hours
            ! ( props == input.checked )  ? input.click() :  null
        })
    }

    const isUpdate = () => {
        let textButton = document.getElementById('formSubmit').querySelector('#buttonSubmit').textContent
        return textButton == 'Todo' ?  true :  false
    }

    const resetHandler = () => {
        checked = false 
        document.getElementById('removeAll').checked= false
    }
    return (
        <tr>
            <th>
                <label className='btn btn-danger' htmlFor="removeAll">
                    removeAll 
                    <input  onChange={ 
                        (e) => {
                            checkedAllHandler(e.target.checked)
                            checked = ! checked }}
                        defaultChecked={checked}
                        type="checkbox"
                        id="removeAll" />
                </label>
            </th>
            <th>
                <button className='btn btn-success' onClick = { () => {
                    itsidDel().length == 1 && isUpdate()?
                        requestUpdateTodoHandler(itsidDel()) : null
                    resetHandler() 
                }}>edit</button>
            </th>
            <th>
                <button className="btn btn-danger" onClick={ () => {
                    itsidDel().length >= 1 && isUpdate() ? 
                        sendDeletTodo() : null
                    resetHandler()
                }}>remove</button>
            </th>
        </tr>
    )
}

export default TableHead