import { z } from "zod";
import { UpdateNote } from "./schema";
import { Note } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof UpdateNote>;
export type ReturnType = ActionState<InputType, Note>;
