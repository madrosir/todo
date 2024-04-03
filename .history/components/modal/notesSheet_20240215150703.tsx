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
                <SheetTrigger>     <AlignJustify className="" size={25} />
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