import React from "react";
import cn from "classnames";
import styles from "./SearchPanel.module.scss";

const SearchPanel: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="type to search"
      className={cn("form-control", styles.input)}
    />
  );
};

export default SearchPanel;
