"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { UpdatePriority } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, important } = data;
  let note;

  try {
    note = await db.note.update({
      where: {
        id,
      },
      data: {
        important,
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

export const updatePriority = createSafeAction(UpdatePriority, handler);
