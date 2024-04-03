"use client"
import { User2 } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";
import NoteListWrapper from "./NoteListWrapper";
import { Search } from "../search/search";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";


const NoteList = async () => {
    const current = new Date();
    const pathname = usePathname();
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }
    const data = await db.note.findMany({
        where: {
            authorId: userId,

        },

        orderBy: {
            createdAt: "desc",
        },
    });



    const validNotes = data.filter((note) => {
        if (!note?.expired || (note?.expired && note?.expired > current)) {
            return note;
        }
    });
    return (
        <div className="h-[100%] w-full space-y-4 border bg-slate-200">
            <div className="block items-center justify-center border md:hidden lg:hidden">
                <Search />
                {sidebarLinks.map((item) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;





                    return (

                        <Link
                            href={item.route}
                            key={item.label}
                            className={`${isActive
                                ? "bg-slate-400"
                                : ""
                                }  flex items-center justify-start gap-4 bg-transparent p-4 rounded-2xl hover:bg-slate-300`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}

                            />
                            <p className={`max-md:hidden`}>{item.label}</p>
                        </Link>

                    )
                })}
            </div>
            <div className="flex items-center justify-center border text-lg font-semibold text-neutral-600">
                <User2 className="mr-2 h-4 w-4" /> NotesList
            </div>
            <div>
                <NoteListWrapper validNotes={validNotes} />
            </div>

        </div>

    );
};

export default NoteList;
