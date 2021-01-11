import React, { createContext, useCallback, useContext, useState } from "react";
import { ITodo, TodoContextType } from "../components/Interfaces";
import { PropsOther } from "../utils/UtilityTypes";

const TodoContext = createContext<Partial<TodoContextType>>({});

TodoContext.displayName = "TodoContext";

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<PropsOther> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: Date.now(), label: "Drink Coffe", important: false },
    { id: Date.now() + 1, label: "Make Awesome App", important: true },
    { id: Date.now() + 2, label: "Have a lunch", important: false },
  ]);

  const setImportantHandler = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              important: !todo.important,
            }
          : todo
      )
    );
  }, []);

  const deleteHandler = useCallback(
    (id: number) => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  const addHandler = useCallback(
    (text: string) =>
      setTodos((prev) => [
        { id: Date.now(), important: false, label: text },
        ...prev,
      ]),
    []
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        setImportantHandler,
        deleteHandler,
        addHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
