import { z } from "zod";
import { Tag } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { AddsTags } from "./schema";

export type InputType = z.infer<typeof AddsTags>;

export type ReturnType = ActionState<InputType, Tag>;
