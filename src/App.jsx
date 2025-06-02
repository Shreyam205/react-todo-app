import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    console.log(todos);
    saveToLS()
  }

  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    settodos(newTodos)
    saveToLS()
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    settodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 bg-zinc-800 rounded-md min-h-[80vh]">
        <div className="addTodo my-5">
          <h1 className="text-2xl">Add a ToDo</h1>
          <input onChange={handleChange} value={todo} type="text" className='bg-zinc-600 w-2/3 py-2 px-3 rounded-md border-none outline-none' />
          <button onClick={handleAdd} disabled={todo.length<3} className='bg-blue-500 hover:bg-blue-600 py-2 px-5 mx-4 rounded-md disabled:bg-blue-400 cursor-pointer transition-all'>Add</button>
        </div>
        <input onChange={toggleFinished} type="checkbox" className='my-5 mx-1' value={setshowFinished}/> Show finished todos
        <div className="editTodo">
          <h1 className='text-2xl'>Your Todos</h1>
          <div className="todos my-5">
            {todos.length === 0 && <div>No Todos to display</div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3 place-items-center bg-zinc-600 rounded-md px-5 py-3 gap-5">
                <div className='flex gap-5'>
                  <input onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>
                <div className="buttons flex gap-5 h-full">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-yellow-500 hover:bg-yellow-600 transition-all px-3 py-2 rounded-md cursor-pointer'>Edit</button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-red-500 hover:bg-red-600 transition-all px-3 py-2 rounded-md cursor-pointer'>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
