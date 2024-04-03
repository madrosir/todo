import { z } from "zod";

export const UpdatePriority = z.object({
  noteId: z.string(),
  important: z.optional(),

  id: z.string(),
});
