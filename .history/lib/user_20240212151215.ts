"use server";

import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const initailuser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  const userprofile = await db.user.findUnique({
    where: {
      userid: user.id,
    },
  });
  if (userprofile) {
    return null;
  }
  const newProfile = await db.user.create({
    data: {
      userid: user.id,
      name: `${user.firstName} ${user.lastName || ""}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  console.log(db, "bassj");

  return newProfile;
};
