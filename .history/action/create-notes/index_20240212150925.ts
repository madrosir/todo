import { create } from "zustand";
("use server");

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";

import { InputType, ReturnType } from "./types";
import { CreateNotes } from "./schema";
import note from "@/components/notes/note";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return {
      error: "unauthorized",
    };
  }
  const { title, color, important, progress, expired } = data;

  let note;

  try {
    note = await db.note.create({
      data: {
        title,
        color,
        authorId: userId!,
        important,
        progress,
        expired,
        Tags: {
          create: {
            name: title,
          },
        },
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

export const createNotes = createSafeAction(CreateNotes, handler);
