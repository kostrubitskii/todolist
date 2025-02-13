import { TodoType } from "@/types/TodoType";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: TodoType[];
  loadingDelete: number | null;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoList = ({
  todos,
  loadingDelete,
  onDelete,
  onToggle,
}: Props) => {
  return (
    <ul className="mt-4 space-y-4 sm:space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={`${todo.id}-${index}`}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          loadingDelete={loadingDelete}
        />
      ))}
    </ul>
  );
};
