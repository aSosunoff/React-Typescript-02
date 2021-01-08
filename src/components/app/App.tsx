import React from "react";
import Header from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
