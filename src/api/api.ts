const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const res = await fetch(`${API_URL}?_limit=10`);
  return res.json();
};

export const addTodo = async (title: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  return res.json();
};

export const deleteTodo = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
