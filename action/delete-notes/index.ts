"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { DeleteNote } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  const { id } = data;

  let note;

  try {
    note = await db.note.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to create.",
    };
  }

  revalidatePath("/notes");
  return { data: note };
};

export const deleteNote = createSafeAction(DeleteNote, handler);
