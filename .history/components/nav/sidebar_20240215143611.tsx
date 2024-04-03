
import NotesDialog from "../modal/NotesDialogl";
import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search } from "../search/search";


const Sidebar = () => {
    const { userId } = useAuth();
    const pathname = usePathname();

    return (
        <section className="custom-scrollbar shadow-light-300 sticky left-0 top-0 mx-auto mr-3 hidden h-screen w-[300px] flex-col overflow-y-auto border-r border-slate-300 bg-slate-200 p-6 pt-4 shadow-lg lg:block">
            <div className="w-full py-5">
                <NotesDialog />
            </div>
            <div className="w-full items-center">
                <Search />
            </div>
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
        </section>)
}

export default Sidebar;
