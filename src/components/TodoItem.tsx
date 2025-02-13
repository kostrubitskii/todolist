import { TodoType } from "@/types/TodoType";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { UiSpin } from "./UiSpin";

interface Props {
  todo: TodoType;
  loadingDelete: number | null;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = ({
  todo,
  loadingDelete,
  onDelete,
  onToggle,
}: Props) => {
  const isLoading = loadingDelete === todo.id;

  return (
    <li
      className={twMerge(
        clsx(
          "p-4 rounded-lg shadow-md flex justify-between items-center hover:shadow-xl transition-shadow duration-200 cursor-pointer",
          {
            "bg-gray-100": todo.completed,
            "bg-green-100": !todo.completed,
          }
        )
      )}
      onClick={() => onToggle(todo.id)}
    >
      <span
        className={twMerge(
          clsx("text-sm sm:text-base", {
            "line-through text-gray-500": todo.completed,
            "text-gray-700": !todo.completed,
          })
        )}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center justify-center w-20 h-8"
        disabled={isLoading}
      >
        {isLoading ? (
          <UiSpin/>
        ) : (
          "Delete"
        )}
      </button>
    </li>
  );
};
