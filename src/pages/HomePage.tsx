"use client";

import { useState } from "react";
import { TodoList } from "../components/TodoList";
import { addTodo, deleteTodo } from "@/api/api";
import { TodoType } from "@/types/TodoType";
import { UiSpin } from "@/components/UiSpin";

interface Props {
  todos: TodoType[];
}

const HomePage = ({ todos }: Props) => {
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState<number | null>(null);
  const [todoList, setTodoList] = useState<TodoType[]>(todos || []);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const optimisticTodo: TodoType = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodoList((prevTodos) => [...prevTodos, optimisticTodo]);
    setNewTodo("");
    setLoading(true);

    try {
      const addedTodo = await addTodo(newTodo);
      setTodoList((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === optimisticTodo.id ? { ...addedTodo, id: todo.id } : todo
        )
      );
    } catch (error) {
      setTodoList((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== optimisticTodo.id)
      );

      alert("An error occurred while adding a todo");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setLoadingDelete(id);

    try {
      await deleteTodo(id);
    } catch (error) {
      setTodoList((prevTodos) => [
        ...prevTodos,
        ...todoList.filter((todo) => todo.id === id),
      ]);

      alert("An error occurred while deleting a todo");
      console.log(error);
    } finally {
      setLoadingDelete(null);
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mx-auto p-4 sm:p-2 w-full sm:w-[1200px]">
      <h1 className="text-2xl font-bold">Todo List</h1>

      <form onSubmit={handleAddTodo} className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter todo..."
          className="border p-2 flex-grow focus:border-gray-500 focus:outline-none rounded-md"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 w-28 rounded-md hover:bg-blue-600 transition-colors duration-200"
          disabled={loading}
        >
          {loading ? <UiSpin borderColor="blue-500" /> : "Add"}
        </button>
      </form>

      <TodoList
        todos={todoList}
        onDelete={handleDeleteTodo}
        loadingDelete={loadingDelete}
        onToggle={handleToggleCompleted}
      />
    </div>
  );
};

export default HomePage;