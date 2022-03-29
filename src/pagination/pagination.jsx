import {useRef, useState} from "react";
import PaginationMod from './paginationModules/pagination.module.css'

const  Pagination = (array,limit,home = false) => {

    const arr = array
    const lines = Math.ceil(arr.length  / limit)
    let initialValues = home ? -1 : 0
    const [beginArray,setBeginArray] = useState(initialValues)
    const sliderRef = useRef()

    const moveSliderHandler = (count) => {
        let scrollLeft = sliderRef.current.scrollLeft
        let mathRound = count - (Math.round(scrollLeft / 35))
        mathRound  >= 3 ? sliderRef.current.scrollLeft += 35 : sliderRef.current.scrollLeft -= 35
    }

    const setBeginArrayHandler = (begin,both = false,direction=null) => {
        if(begin != beginArray && begin >= -1 && arr != ''){
            setBeginArray(begin)
            both ? sliderRef.current.scrollLeft = direction : moveSliderHandler((begin +1))
        }
    }

    const creatSquare = (length) => {
        let squares = []
            for ( let x = 0; x < length; x++)
                squares [x]= <Square key={x} count={x+1} onclick={ () => setBeginArrayHandler(x) }/>
        return squares
    }

    const displayArrayHandler = () => {
        if(beginArray >= 0){
            let itemArray = []
            let x = beginArray * limit
            for ( let i = x; i < arr.length; i++)
                i < (x + limit) ? itemArray.push(arr[i]) : null
            return itemArray
        }
        return []
    }
    return([displayArrayHandler(),beginArray,
        <section style={{width: '100%', margin: '15px 0'}}>
            <div className={PaginationMod.pagination}>
                <div className={PaginationMod.frame}>

                    <div className={PaginationMod.square}
                        onClick={ () => setBeginArrayHandler((0),true,0) }>First</div>
                    { home ? <HomeButton onclick ={ () => setBeginArrayHandler(-1) } />  :  null}
                    <div className={PaginationMod.slider} ref={sliderRef}>{ creatSquare(lines)}</div>

                    <div className={PaginationMod.square}  
                        onClick={ () => setBeginArrayHandler(lines-1 ,true,(lines - 1)*35) }>Last</div>
                </div>
            </div>
        </section>
    ])
}

const Square = (props) => <div className={PaginationMod.square} onClick={props.onclick}>{props.count}</div>
const HomeButton = (props) => <div className={PaginationMod.square} style={{borderRight: 'none'}} onClick={props.onclick}>Add Todo</div>

export default Pagination