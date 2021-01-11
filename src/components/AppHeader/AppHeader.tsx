import React from "react";
import cn from "classnames";
import styles from "./AppHeader.module.scss";

type AppHeaderType = {
  todoCount: number;
  doneCount: number;
};

const AppHeader: React.FC<AppHeaderType> = ({ doneCount, todoCount }) => {
  return (
    <div className={cn(styles.header, "d-flex")}>
      <h1>Todo List</h1>
      <h2>
        {todoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
};

export default AppHeader;
