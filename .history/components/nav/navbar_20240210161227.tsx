import Image from "next/image";
import { Button } from "../ui/button";
import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import TodoMap from "../add-todo/todo-map";


const Navbar = () => {
    return (
        <div className="flex justify-between relative  shadow-xl border-b-2 border-gray-300  bg-[#3d424a]">
            <Image
                src="/saas.svg"
                alt="logo"
                width={150}
                height={50}

            />

            <div className="mx-4 py-3  ">
                <UserButton afterSignOutUrl="/" />

            </div>
        </div>
    );
}

export default Navbar;