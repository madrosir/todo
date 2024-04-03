"use client"
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useDebouncedCallback } from "use-debounce";

const selected = () => {

    const pathname = usePathname();



    return (
        <div>


            <div className="flex flex-1 flex-col gap-6">
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



        </div>
    )
} );
}

export default selected;