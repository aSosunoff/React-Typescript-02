import React, { useMemo } from "react";
import Header from "../AppHeader";
import { ITodo } from "../Interfaces";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const todoDate: ITodo[] = useMemo<ITodo[]>(
    () => [
      { id: Date.now(), label: "Drink Coffe", important: false },
      { id: Date.now() + 1, label: "Make Awesome App", important: true },
      { id: Date.now() + 2, label: "Have a lunch", important: false },
    ],
    []
  );

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.panel}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoDate} />
    </div>
  );
};

export default App;
