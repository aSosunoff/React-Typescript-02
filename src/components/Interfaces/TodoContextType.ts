import { TodoType } from "./TodoType";

export type TodoContextType = {
  todos: TodoType[];
  setImportantHandler: (id: number) => void;
  setDoneHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
  addHandler: (text: string) => void;
};
