import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify, AlignLeft } from 'lucide-react';

const NotesSheet = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>     <AlignJustify className="block border border-blue-900 md:hidden lg:hidden" size={50} />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>);
}

export default NotesSheet;