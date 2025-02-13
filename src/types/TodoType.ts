export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: TodoType[];
  onDelete: (id: number) => void;
  loadingDelete: number | null;
  onToggle: (id: number) => void;
}

export interface TodoItemProps {
  todo: TodoType;
  onDelete: (id: number) => void;
  loadingDelete: number | null;
  onToggle: (id: number) => void;
}
