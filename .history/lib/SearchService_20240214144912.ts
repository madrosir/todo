import { db } from "@/lib/db";
import { title } from "process";

export const getSearch = async (term?: string) => {
  const notes = await db.note.findMany({
    where: {
      OR:[
        title: {
          contains: term,
          mode: "insensitive",
        },
        content: {
          contains: term,
          mode: "insensitive",
        },
      ]
    },
  });
  return notes;
};
