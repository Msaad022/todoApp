import { Component, useEffect, useMemo } from "react"
import TableStoryMod from './storiesMod/tableStory.module.css'
import imgTodo from  './imgTodo.svg'

class HomeStory extends Component {
  state = {
    toggleEle: true
  }

  toggleHandler = () => {
    this.setState({
      toggleEle: ! this.state.toggleEle
    })
  }

  render (){
    return (
      <div className= {TableStoryMod.addstoryTodo}>
        <div className= {TableStoryMod.storiesHome}>
          {this.state.toggleEle ?
            <ImgHome  click={this.toggleHandler} /> :
              <TodosItems addtodostory={this.props.addtodostory}
                data={this.props.data}
                click={this.toggleHandler} />
          }
        </div>
      </div>
    )
  }
}

const ImgHome = ({click}) =>{

  const handleImageLoaded = (e) => e.target.style.opacity = '1'
  return (
    <>
      <img src={imgTodo} 
        alt="imgTodo" loading="lazy"
        onLoad= { (e) => handleImageLoaded(e) }
        onClick= { () => click() } />
      <p>Add Todo to Story</p>
    </>
  )
}

const TodosItems = ({addtodostory,data,click}) => {

  const dataCon = data(),
  addTodoStory = addtodostory
  
  const tableDataHandler = () => {
    if( dataCon != '' ){
      let idItems = [] ,indexStory,
      elementDiv = document.getElementById('showingTodo'),
      checkboxs = elementDiv.querySelectorAll('input')

      checkboxs.forEach( (element) => {
        if(element.checked){  
          idItems.push(element.id)
          indexStory = element.getAttribute('data-index')
        }
      });
    
      idItems != '' ? addTodoStory(idItems,indexStory) : null
    }
    click()
  }
  return (
    <div className={TableStoryMod.showingTodo} id='showingTodo'>
      <ul>
        {dataCon == '' ? <p> Add Some To Do </p> : null}
        {dataCon.map((todo)=>{
          return (
            <li key={todo.id}>
              <input onChange={ () => '' } id={todo.story[0]} data-index={todo.story[1]} type="checkbox" />{todo.text}
            </li>
          )
        })
      }</ul>
      <button onClick={ () => tableDataHandler() }>done</button>
    </div>
  )
}

export default HomeStory