import React, { createContext, useCallback, useContext, useState } from "react";
import { ITodo, TodoContextType } from "../components/Interfaces";
import { PropsOther } from "../utils/UtilityTypes";

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

TodoContext.displayName = "TodoContext";

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<PropsOther> = ({ children }) => {
  const createNewElement = useCallback((label: string): ITodo => {
    return { id: Date.now(), important: false, label, done: false };
  }, []);

  const [todos, setTodos] = useState<ITodo[]>([]);

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

  const setDoneHandler = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
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
    (text: string) => setTodos((prev) => [createNewElement(text), ...prev]),
    [createNewElement]
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        setImportantHandler,
        setDoneHandler,
        deleteHandler,
        addHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
