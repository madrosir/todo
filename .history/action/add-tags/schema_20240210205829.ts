import { z } from "zod";

export const AddsTags = z.object({
  name: z.string(),

  id: z.string(),
});
