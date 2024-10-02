// useCallback for function and component optimiztion and useMemo used for normal and single value optimization
// The React useCallback Hook returns a memorized callback function.
// The React useMemo Hook returns a memorized value.
import React, { useCallback,useState } from 'react'
import Todos from "./Todos";


const UseCallBack = () => {

    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default UseCallBack
