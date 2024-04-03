import { id } from "date-fns/locale";
import { z } from "zod";

export const DeleteNote = z.string(
  id: z.string(),
});
