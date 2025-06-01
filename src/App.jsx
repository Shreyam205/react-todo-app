import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  
  const handleAdd = () =>{
    settodos([...todos, {todo, isCompleted: false}])
    settodo("")
  }
  const handleEdit = () =>{}
  const handleDelete = () =>{}

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 p-5 bg-zinc-800 rounded-md min-h-[80vh]">
        <div className="addTodo my-5">
          <h1 className="text-2xl">Add a ToDo</h1>
          <input type="text" className='bg-zinc-600 w-1/2 py-2 px-3 rounded-md border-none outline-none'/>
          <button onClick={handleAdd} className='bg-blue-500 hover:bg-blue-600 py-2 px-5 mx-4 rounded-md cursor-pointer transition-all'>Add</button>
        </div>
        <div className="editTodo">
          <h1 className='text-2xl'>{todo}</h1>
          <div className="todos flex justify-between place-items-center bg-zinc-600 rounded-md px-5 py-3">
            <div className="text">
              my todo
            </div>
            <div className="buttons flex gap-5">
              <button onClick={handleEdit} className='bg-yellow-500 hover:bg-yellow-600 transition-all px-3 py-2 rounded-md cursor-pointer'>Edit</button>
              <button onClick={handleDelete} className='bg-red-500 hover:bg-red-600 transition-all px-3 py-2 rounded-md cursor-pointer'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
