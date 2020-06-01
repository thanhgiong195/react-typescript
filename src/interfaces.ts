// Todo interface
export type TodoInterface = {
  id: string;
  name: string;
  isManager: boolean;
};

// Todo form interface
export type TodoFormInterface = {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
};

// Todo list interface
export type TodoListInterface = {
  handleTodoUpdate: (name: string, id: string) => void;
  handleTodoRemove: (id: string, name: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToDetail: (id: string) => void;
  todos: TodoInterface[];
};

// Todo item interface
export type TodoItemInterface = {
  handleTodoUpdate: (name: string, id: string) => void;
  handleTodoRemove: (id: string, name: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToDetail: (id: string) => void;
  todos: TodoInterface;
};
