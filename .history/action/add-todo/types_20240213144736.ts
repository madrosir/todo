import { z } from "zod";
import { Note } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateTodo } from "./schema";

export type InputType = z.infer<typeof UpdateTodo>;

export type ReturnType = ActionState<InputType, Note>;
