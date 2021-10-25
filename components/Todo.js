
import {useState} from 'react'
function Todo() {
    const[todo1,createTodo] = useState(['todo 1', 'todo 2']);
    const [todo, createActivity]=useState('');
    const removeTodo= todo => {
        createTodo(todo1.filter(t=>t!=todo));
    }
    return (
        <div>
            <div className="text-center bg-red-400 py-4">
                <h1 className="font-bold">TO DO LIST</h1>
            </div>
            {/* <div className="list bg-yellow-200 ">
                <p className="py-4 border-2 border-[#000000] px-5">Activity-1</p>
                <p className="py-4 border-2 border-[#000000] px-5">Activity-2</p>
                <p className="py-4 border-2 border-[#000000] px-5">Activity-3</p>
                <p className="py-4 border-2 border-[#000000] px-5">Activity-4</p>
                <p className="py-4 border-2 border-[#000000] px-5">Activity-5</p>
            </div> */}
            <input value={todo} onChange={c => createTodo(c.target.value)}/>
            <button onClick={() => createActivity([...todo1,todo])}>Add</button>
            {todo1.map((todo,index) => (
                        <>
                                <h1>to-do</h1>
                                <button onClick={() => removeTodo(todo)}>Remove</button>
                        </>
            )

            )}
        </div>
    )
}

export default Todo
