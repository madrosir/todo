import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";
import TodoMap from "@/components/add-todo/todo-map";




const Navbar = () => {
    const { userId } = auth();

    return (
        <div className="flex justify-between relative  shadow-xl border-b-2 border-gray-300  bg-[#3d424a]">
            <Image
                src="/saas.svg"
                alt="logo"
                width={190}
                height={50}

            />
            <div className="mx-4 py-5 px-6 space-x-4 md:block  md:w-auto w-full">
                <>
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                    </Button>
                    <Button size='sm' asChild>
                        <Link href='/sign-up'>
                            Get Taskflow for free
                        </Link>
                    </Button></>

            </div>
        </div >
    );
}

export default Navbar;