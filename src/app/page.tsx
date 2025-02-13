import HomePage from "../pages/HomePage";
import { getTodos } from "@/api/api";
import { TodoType } from "@/types/TodoType";

export default async function Home() {
  const todos: TodoType[] = await getTodos();
  return <HomePage todos={todos} />;
}
