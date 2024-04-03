"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Selected = () => {

    const pathname = usePathname();



    return (
        <div className="mx-10 w-full justify-between">


            <div className="flex w-full justify-between gap-12">
                {sidebarLinks.map((item) => {
                    const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;





                    return (

                        <Link
                            href={item.route}
                            key={item.label}
                            className={`${isActive
                                ? "bg-slate-500"
                                : ""
                                }  flex items-center justify-center gap-4 w-full  rounded-2xl hover:bg-slate-500 bg-[#9ca9b8fa]`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}

                            />
                            <p className={`justify-center text-center max-md:block`}>{item.label}</p>
                        </Link>

                    )
                })}
            </div>



        </div>
    )
}

export default Selected;