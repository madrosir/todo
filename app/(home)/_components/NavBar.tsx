import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";




const Navbar = () => {

    return (
        <div className="relative flex justify-between border-b-2 border-gray-300 bg-[#3d424a] shadow-xl">
            <Image
                src="/saas.svg"
                alt="logo"
                width={190}
                height={50}

            />
            <div className="mx-4 w-full space-x-4 px-6 py-5 md:block md:w-auto">
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