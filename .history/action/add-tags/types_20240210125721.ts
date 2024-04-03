import { z } from "zod";
import { Note } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { Updatecontent } from "./schema";

export type InputType = z.infer<typeof Updatecontent>;

export type ReturnType = ActionState<InputType, Note>;
