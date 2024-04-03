import { id } from "date-fns/locale";
import { z } from "zod";

export const DeleteNote = z.object(
  id: z.string(),
);
