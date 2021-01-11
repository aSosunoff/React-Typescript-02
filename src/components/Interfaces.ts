export type ITodo = {
  id: number;
  label: string;
  important: boolean;
  done: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  setImportantHandler: (id: number) => void;
  setDoneHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
  addHandler: (text: string) => void;
};
