import React, { useCallback, useState } from "react";
import Header from "../AppHeader";
import { ITodo } from "../Interfaces";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import styles from "./App.module.scss";
import cn from "classnames";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: Date.now(), label: "Drink Coffe", important: false },
    { id: Date.now() + 1, label: "Make Awesome App", important: true },
    { id: Date.now() + 2, label: "Have a lunch", important: false },
  ]);

  const setImportantHandler = useCallback((id) => {
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

  return (
    <div className={styles.app}>
      <Header />
      <div className={cn("d-flex", styles.panel)}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todos} setImportantHandler={setImportantHandler} />
    </div>
  );
};

export default App;
