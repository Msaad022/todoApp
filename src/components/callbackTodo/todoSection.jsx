import {useEffect, useRef} from 'react';
import Todomod from '../../modules/todomod.module.css'
import GetDataTodo from '../getDataTodo';


const TodoSection = () => {

    const [{setTodoHandler},{},{valuesUpdateing}] = GetDataTodo()
    const areaRfe = useRef()
    
    const defaultVal = valuesUpdateing.valueTextarea
    const setValueUpdate = (e) => areaRfe.current.value = e.target.value
    useEffect( () => { areaRfe.current.value = defaultVal })

    const formSubmit = event => event.preventDefault()
    
    return (
        <form action="#" onSubmit={ event => formSubmit(event) } id='formSubmit'>
            <div className={Todomod.TodoValue}>
                
                <textarea required
                onChange={ (e) => { setValueUpdate(e) } }
                name="todovalue"
                ref={ areaRfe }
                placeholder='Type Your Todo '/>
            </div>
            <div className={Todomod.AddTodo}>
                <button className='btn1 btn btn-primary' type='submit' id='buttonSubmit'
                        onClick={ () => areaRfe.current.value != '' ? setTodoHandler(areaRfe) : null
                }>{valuesUpdateing.textTodoButton}
                </button>
                
            </div>
        </form>
    )
}

export default TodoSection