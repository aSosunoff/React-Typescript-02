import React from "react";
import cn from "classnames";
import styles from "./AppHeader.module.scss";

type AppHeaderType = {
  todo?: number;
  done?: number;
};

const AppHeader: React.FC<AppHeaderType> = ({ done = 0, todo = 0 }) => {
  return (
    <div className={cn(styles.header, "d-flex")}>
      <h1>Todo List</h1>
      <h2>
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
