import { db } from "@/lib/db";

export const getSearch = async (term?: string) => {
  const notes = await db.note.findMany({
    where: {
      title: {
        contains: term,
        mode: "insensitive",
      },
    },
  });
  return notes;
};
