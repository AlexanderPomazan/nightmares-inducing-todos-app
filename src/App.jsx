import { useState, useCallback, useEffect } from "react";
import { Modal } from "./Modal";
import { Todos } from "./Todos";

const initialTodos = [
  {
    id: 1,
    text: "Implement creating TODOs",
    completed: true,
  },
  {
    id: 2,
    text: "Refactor the TODOs app",
    completed: false,
  },
  {
    id: 3,
    text: "Implement completing TODOs",
    completed: false,
  },
  {
    id: 4,
    text: "Implement removing TODOs",
    completed: false,
  },
  {
    id: 5,
    text: "Persist TODOs between refreshes",
    completed: false
  }
];

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = useCallback((value) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: value,
      completed: false,
    };

    setTodos((todos) => {
      todos.push(newTodo);
      return todos;
    });
    setIsModalOpen(false);
  });

  const renderChildren = useCallback(
    () => (
      <div>
        <Todos
          todos={todos}
          onRemoveTodos={() => {
            // TODO: implement
          }}
          onCompleteTodo={() => {
            // TODO: implement
          }}
        />
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={handleSubmit}
        />
      </div>
    ),
    [handleSubmit, isModalOpen, todos]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {renderChildren()}
    </div>
  );
}

export default App;
