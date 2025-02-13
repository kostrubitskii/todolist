import { TodoListProps } from "@/types/TodoType";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  onDelete,
  loadingDelete,
  onToggle,
}: TodoListProps) => {
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
