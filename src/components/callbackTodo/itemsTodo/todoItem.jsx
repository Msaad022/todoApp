import { useRef, useState } from "react"
import ItemListmod from "../../../modules/itemListmod.module.css"
import { RandomColor } from "./randomColor"
let indexItem = ''
const TodoItem = (props) => {

    const {dataItems} = props.dataitems
    const [randomColor,randomCharacter] = RandomColor()
    const textareaRef = useRef()

    const changeItems = (e) => {
        textareaRef.current.value = e.target.getAttribute("data-text")
        indexItem = e.target.getAttribute("data-index")
    }

    return (
        <>
            <div className={ItemListmod.rainbow}>{
                dataItems.map( (item,index) => {
                    let randomcolor = randomColor(index)
                    return (
                        <div className={ItemListmod.item} key={item.key} >
                            <span
                            className={item.isCompleted ? ItemListmod.isCompleted : null}
                                data-index={index}
                                style={{backgroundColor:randomcolor ,border: '0px' + ' solid '+ randomcolor}}
                                data-text={item.text}
                                onClick={ (e) => changeItems(e)}
                                >{randomCharacter(index)}</span>
                        </div>
                    )
                })
            }</div>
            <MoveList textarea={textareaRef} updateing={props.updateitems} removed={props.removeitems} />
        </>
    )
}

function MoveList (props){

    const updateItemHandler = props.updateing
    const removeItem = props.removed
    const areaRef = props.textarea
    
    const removeItemHandler = () => {
        indexItem = removeItem(indexItem)
        areaRef.current.value = null
    }

    return (
        <div className={ItemListmod.ItemList}>
            <textarea   ref={areaRef}
                        placeholder= "Type Your Item"
                        type= "text"
                        defaultValue= {props.textitem} 
                        onChange={ () => indexItem != '' ? updateItemHandler(indexItem,areaRef) : null }
                        />
            <button className="btn btn-danger" onClick={ () => indexItem != '' ? removeItemHandler() : null }>
                remove</button>
        </div>
    )
}

export default TodoItem