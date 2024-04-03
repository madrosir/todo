import { db } from "./db";

export const createTodo = async (content: string, noteId: string) => {
  try {
    const Todo = await db.todo.create({
      data: {
        content,
        noteId,
      },
    });
    console.log(noteId, "skdhkljh");
    return Todo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};
