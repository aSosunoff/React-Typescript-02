export type ITodo = {
  id: number;
  label: string;
  important: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  setImportantHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
};
