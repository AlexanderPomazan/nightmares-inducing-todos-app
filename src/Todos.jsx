import { useState } from 'react'

export const Todos = ({ todos, onRemoveTodos }) => {

  const [selectedTodos, setSelectedTodos] = useState([])

  return (
    <div style={{ maxWidth: 400, marginBottom: 20 }}>
      {todos.map((todo) => {
        const isSelected = false // TODO: implement displaying selected state

        return (
          <li
            onClick={() => setSelectedTodos([...selectedTodos, todo])}
            style={{
              margin: 8,
              padding: 8,
              textDecoration: todo.completed ? 'line-through' : 'none',
              boxShadow: isSelected ? '2px 2px 4px 0 blue' : 'none',
            }}
          >{todo.text}</li>
        )
      })}

      <button style={{ margin: 16 }} onClick={onRemoveTodos}>Remove selected todos</button>
    </div>
  )
}