import { z } from "zod";

export const UpdateTodo = z.object({
  noteId: z.string(),
  todo: z.array(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    })
  ),

  id: z.string(),
});
