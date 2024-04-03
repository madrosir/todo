"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { AddTags } from "./schema";
import { InputType, ReturnType } from "./types";
import { Updatecontent } from "../add-content/schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { name } = data;
  let note;

  try {
    note = await db.note.create({
      data: {
        name,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update.",
    };
  }

  revalidatePath(`/notes`);
  return { data: note };
};

export const updatecontent = createSafeAction(Updatecontent, handler);
