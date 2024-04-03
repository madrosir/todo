import { Tag } from "@prisma/client";
import { z } from "zod";
export const CreateNotes = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "احبه طويل",
    })
    .max(20, {
      message: "اكل خره",
    }),

  color: z.optional(
    z.string({
      required_error: "color is required",
      invalid_type_error: "color is required",
    })
  ),
  important: z.optional(z.boolean()),
  progress: z.optional(z.boolean()),
  expired: z.optional(z.date()),
});
