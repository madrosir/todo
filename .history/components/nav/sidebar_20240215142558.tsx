"use client"
import { useState } from "react";
import { Star, CalendarOff, Search, Link } from "lucide-react";
import NotesDialog from "../modal/NotesDialogl";
import NotesSheet from "../modal/notesSheet";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import Image from "next/image";


const Sidebar = () => {
    const { userId } = useAuth();
    const pathname = usePathname();


    return (
        <section className="background-light900_dark200 light-border custom-scrollbar shadow-light-300 sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 dark:shadow-none max-sm:hidden lg:w-[266px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((item) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

                    if (item.route === '/profile') {
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
                                ? "primary-gradient rounded-lg text-light-900"
                                : "text-dark300_light900"
                                }  flex items-center justify-start gap-4 bg-transparent p-4`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActive ? "" : "invert-colors"}`}
                            />
                            <p className={`${isActive ? 'base-bold' : 'base-medium'} max-lg:hidden`}>{item.label}</p>
                        </Link>
                    )
                })}
            </div>
            export default Sidebar;
