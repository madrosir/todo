import { z } from "zod";

export const AddTags = z.object({
  name: z.string(),

  id: z.string(),
});
