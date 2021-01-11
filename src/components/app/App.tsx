import React from "react";
import Header from "../AppHeader";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../Todo";
import styles from "./App.module.scss";
import cn from "classnames";
import { withContext } from "../../HOC/withContext";
import { TodoProvider } from "../../context/todoContext";
import ItemAddForm from "../ItemAddForm";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />

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
