import { z } from "zod";

export const Updatecontent = z.object({
  noteId: z.string(),
  content: z.array(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    })
  ),

  id: z.string(),
});
