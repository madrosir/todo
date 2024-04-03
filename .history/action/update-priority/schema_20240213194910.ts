import { z } from "zod";

export const UpdatePriority = z.object({
  important: z.boolean(),

  id: z.string(),
});
