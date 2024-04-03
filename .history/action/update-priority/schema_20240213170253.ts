import { z } from "zod";

export const UpdatePriority = z.object({
  noteId: z.string(),
  important: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    })
  ),

  id: z.string(),
});
