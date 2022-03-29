import Classes from './modules/appmod.module.css'
import Todo from './components/todo'
import TestCompoent from './test'

function App() {

  return (
    <div className={Classes.ComponentApp}>
      <>
        <Todo />
        {/* <TestCompoent /> */}
      </>
    </div>
  )

}

export default App
