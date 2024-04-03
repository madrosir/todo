"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Selected = () => {

    const pathname = usePathname();



    return (
        <div>


            <div className="flex gap-6">
                {sidebarLinks.map((item) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;





                    return (

                        <Button
                            href={item.route}
                            key={item.label}
                            className={`${isActive
                                ? "bg-slate-500"
                                : ""
                                }  flex items-center justify-start gap-4  w-[220px] p-4 rounded-2xl hover:bg-slate-500 bg-[#9ca9b8fa]`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}

                            />
                            <p className={`max-md:block`}>{item.label}</p>
                        </Button>

                    )
                })}
            </div>



        </div>
    )
}

export default Selected;