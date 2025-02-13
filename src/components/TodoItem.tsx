import { TodoItemProps } from "@/types/TodoType";

export const TodoItem = ({
  todo,
  onDelete,
  loadingDelete,
  onToggle,
}: TodoItemProps) => {
  return (
    <li
      className={` p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-xl transition-shadow duration-200 cursor-pointer ${
        todo.completed ? "bg-gray-100" : "bg-green-100"
      }`}
      onClick={() => onToggle(todo.id)}
    >
      <span
        className={`text-sm sm:text-base ${
          todo.completed ? "line-through text-gray-500" : "text-gray-700"
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center w-20 h-8"
        disabled={loadingDelete !== null && loadingDelete === todo.id}
      >
        {loadingDelete === todo.id ? (
          <div className="w-4 h-4 border-2 border-t-2 border-red-500 rounded-full animate-spin"></div>
        ) : (
          "Delete"
        )}
      </button>
    </li>
  );
};
