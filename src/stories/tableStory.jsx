import TableStoryMod from './storiesMod/tableStory.module.css'
import Pagination from '../pagination/pagination'
import HomeStory from './homeStory'

const TableStory = (props) => {

  const dataTable = props.datatable;
  const fadeOutHandler = props.fadeout
  const [array,beginArray,pagination] = Pagination(dataTable,1,true)

  return (
    <div className={TableStoryMod.opacity} id='opacity'  onClick= { (e) => fadeOutHandler(e)}>
      <div className={TableStoryMod.tableStory}>
        { beginArray == -1 &&
          <HomeStory addtodostory={props.addtodostory} data= {props.alltodos} />
        }
        {array.map((todo) => {
          return (
            <div className= {TableStoryMod.stories} key={todo.id} >
              <ul>
                <li><p>{todo.text}</p></li>
                <li>
                  <ul>
                    {todo.items.map((item) => {
                      return (
                        <li key={item.key}>
                          <p style={ item.isCompleted ? { textDecorationLine: "line-through" } : null} >
                            {item.text}
                          </p>
                        </li>
                      );
                    })
                  }</ul>
                </li>
              </ul>
            </div>
          )
        })}
      {pagination}
      </div>
    </div>
  );
};


export default TableStory