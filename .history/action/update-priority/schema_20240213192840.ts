import { z } from "zod";

export const UpdatePriority = z.object({
  important: z.optional(z.boolean()),

  id: z.string(),
});
