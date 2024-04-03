"use client"
import { useState } from "react";

import NotesDialog from "../modal/NotesDialogl";
import NotesSheet from "../modal/notesSheet";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const Sidebar = () => {
    const { userId } = useAuth();
    const pathname = usePathname();


    return (
        <section className="">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((item) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

                    if (item.route === '/notes') {
                        if (userId) {
                            item.route = `${item.route}/${userId}`
                        } else {
                            return null;
                        }
                    }

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={`${isActive
                                ? " bg-black"
                                : ""
                                }  flex items-center justify-start gap-4 bg-transparent p-4`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActive ? "" : ""}`}
                            />
                            <p className={`${isActive ? '' : ''} max-lg:hidden`}>{item.label}</p>
                        </Link>
                    )
                })}
            </div>
        </section>)
}
export default Sidebar;
