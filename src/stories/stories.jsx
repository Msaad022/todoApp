import { useEffect, useState } from "react";
import StoriesMod from "./storiesMod/stories.module.css";
import { RandomColor } from "../components/callbackTodo/itemsTodo/randomColor";
import TableStory from "./tableStory";
import GetDataTodo from '../components/getDataTodo'

let defaultTodo = [], arrTableStory = [] , titleStory , idStory

function Stories () {
  let  boolData = true
  const [valBool,setvalBool] = useState(false)
  const [ 
    {},{todoData},{},{
      creatStoryHandler,
      changeTitleHandler,
      removeStoriesHandler,
      addTodoStory,
      valState } ] = GetDataTodo()

  const toggleBoll = () => setvalBool(! valBool)

  const alltodosHandler = () => {
    if(boolData == true){
      let arr = todoData, newArr = []
      for (let l = 0; l < arr.length; l++) {
        if(arr[l].storyBool == false) {
          arr[l].story = [arr[l].id,idStory]
          newArr.push(arr[l])
        }
      }
      defaultTodo = newArr
      boolData = false
    }
    return defaultTodo
  }

  const getDataTable = (arr) => {

    for (let x = 0; x < arr.length; x++)
      for(let n in todoData)
        todoData[n].id == arr[x] ? arrTableStory[x] = todoData[n] : null

    return arrTableStory
  }

  const TableStoryHandler = (title,id) => {
    titleStory = title
    idStory = id
    toggleBoll()
  };

  const fadeoutHandler = (e) => {
    let element = e.target
    if(element.id == 'opacity'){
      element.style.opacity = 0
      arrTableStory= []
      setTimeout(() => {
        toggleBoll()
      },501)
    }
  };

  useEffect( () => {
    if(valBool == true){
      setTimeout(() => {
        document.getElementById('opacity').style.opacity = 1
      },2)
      boolData = true
    }
  },[valBool])

  const dataTable = () => {
    let arr = valState.stories
    for(let x in arr){
      if(idStory == arr[x].id){
        return getDataTable(arr[x].todos)
      }
    }
  }

  const [randomColor] = RandomColor();
  return (
    <>
      { valBool &&
        <TableStory alltodos={alltodosHandler}
          addtodostory={addTodoStory}
          datatable={dataTable()}
          fadeout={fadeoutHandler} />
      }
  
      <div className={StoriesMod.perentStories}>
        <div className={StoriesMod.addStories}>
          <div>
            <button onClick={() => creatStoryHandler()}>
              Create Story
            </button>
          </div>
        </div>
        <div className={StoriesMod.framStories}>
          {valState.stories.map((story, index) => {
            let randomcolor = randomColor(index + 3)
            return (
              <div
                key={story.id}
                style={{backgroundColor: randomcolor}}
                className={StoriesMod.story}
              >
                <div>
                  <input
                    type="checkbox"
                    id={index}
                    onChange={(e) => removeStoriesHandler(e)}
                  />
                </div>
                <div>
                  <span
                    data-index={index}
                    className={StoriesMod.title}
                    onClick={(e) => changeTitleHandler(e)}
                  >
                    {story.title}
                  </span>
                  <div className={StoriesMod.addTodo} onClick= { () => TableStoryHandler(story.title,story.id)}>+</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Stories;