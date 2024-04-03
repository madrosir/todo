import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, AlignLeft } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const NotesSheet = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>     <AlignJustify className="mt-1 block md:hidden lg:hidden" size={50} />
                </SheetTrigger>
                <SheetContent>
                    <Link href="/notes" className="">
                        <Image
                            src="/saas.svg"
                            alt="logo"
                            width={150}
                            height={50}


                        />
                    </Link>
                </SheetContent>
            </Sheet>

        </div>);
}

export default NotesSheet;