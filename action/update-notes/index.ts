"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateNote } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, id } = data;
  let note;

  try {
    note = await db.note.update({
      where: {
        id,
        authorId: userId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update board",
    };
  }
  revalidatePath(`/Notes`);
  return { data: note };
};
export const updateNote = createSafeAction(UpdateNote, handler);
