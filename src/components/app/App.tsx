import React, { useMemo } from "react";
import Header from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../Todo";
import styles from "./App.module.scss";
import cn from "classnames";
import { withContext } from "../../HOC/withContext";
import { TodoProvider, useTodoContext } from "../../context/todoContext";
import ItemAddForm from "../ItemAddForm";

const App: React.FC = () => {
  const { todos } = useTodoContext();

  const todoCount = useMemo(() => todos.length, [todos.length]);
  const doneCount = useMemo(() => todos.filter(({ done }) => done).length, [
    todos,
  ]);

  return (
    <div className={styles.app}>
      <Header todoCount={todoCount} doneCount={doneCount} />

      <div className={cn("d-flex", styles.panel)}>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList />

      <ItemAddForm />
    </div>
  );
};

export default withContext(TodoProvider, undefined, App);
