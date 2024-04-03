import { z } from "zod";
import { Tag } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { AddTags } from "./schema";

export type InputType = z.infer<typeof AddTags>;

export type ReturnType = ActionState<InputType, Tag>;
