import { z } from "zod";
import { Note } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateNotes } from "./schema";

export type InputType = z.infer<typeof CreateNotes>;

export type ReturnType = ActionState<InputType, Note>;
