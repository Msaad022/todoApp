import {useEffect, useRef} from 'react';
import Todomod from '../../modules/todomod.module.css'
import GetDataTodo from '../getDataTodo';


const TodoSection = () => {

    const [{setTodoHandler},{},{valuesUpdateing}] = GetDataTodo()
    const titleRfe = useRef()
    const areaRfe = useRef()
    
    const {valueTitle, valueTextarea, textTodoButton} = valuesUpdateing

    const setValueUpdate = (e,element) => element.current.value = e.target.value

    useEffect( () => {

        titleRfe.current.value = valueTitle
        areaRfe.current.value = valueTextarea
     })
    
    return (
        <form action="#" onSubmit={ event => event.preventDefault() } id='formSubmit'>
            <div className={Todomod.TodoValue}>
                <input type="text" 
                    onChange={ (e) => { setValueUpdate(e,titleRfe) } }
                    ref={titleRfe}
                    placeholder='title' 
                    required />
                <textarea required
                    onChange={ (e) => { setValueUpdate(e,areaRfe) } }
                    name="todovalue"
                    ref={ areaRfe }
                    placeholder='Type Your Todo '/>
            </div>
            <div className={Todomod.AddTodo}>
                <button className='btn1 btn btn-primary' type='submit' id='buttonSubmit'
                        onClick={ () => areaRfe.current.value != '' ? setTodoHandler(titleRfe, areaRfe) : null
                }>{textTodoButton}
                </button>
                
            </div>
        </form>
    )
}

export default TodoSection