import { getTodos } from "@/api/api";
import { Todo } from "../components/Todo";
import { TodoType } from "@/types/TodoType";

export default async function Home() {
  const getTodo: TodoType[] = await getTodos();
  return <Todo todos={getTodo} />;
}
