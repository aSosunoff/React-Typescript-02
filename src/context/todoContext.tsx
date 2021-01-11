import React, { createContext, useCallback, useContext, useState } from "react";
import { TodoType } from "../components/Interfaces/TodoType";
import { TodoContextType } from "../components/Interfaces/TodoContextType";
import { PropsOther } from "../utils/UtilityTypes";
import { useFilter } from "../hooks/useFilter";

type TodoContextFilterType = TodoContextType &
  Pick<ReturnType<typeof useFilter>, "setFilterHandler">;

const TodoContext = createContext<TodoContextFilterType>(
  {} as TodoContextFilterType
);

TodoContext.displayName = "TodoContext";

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<PropsOther> = ({ children }) => {
  const createNewElement = useCallback((label: string): TodoType => {
    return { id: Date.now(), important: false, label, done: false };
  }, []);

  const [todos, setTodos] = useState<TodoType[]>([]);

  const { filteredList, setFilterHandler } = useFilter(todos, {
    label: {
      filter: {
        type: "text",
        detail: {},
      },
    },
    done: {
      filter: {
        type: "checkbox",
        detail: {},
      },
    },
    important: {
      filter: {
        type: "checkbox",
        detail: {},
      },
    },
  });

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
        todos: filteredList,
        setImportantHandler,
        setDoneHandler,
        deleteHandler,
        addHandler,
        setFilterHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
