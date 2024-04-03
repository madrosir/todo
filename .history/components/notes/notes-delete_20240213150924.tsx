"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/useAction";
import { deleteNote } from "@/action/delete-notes";
import { FormSubmit } from "../form/FormSubmit";
import { X } from "lucide-react";

interface NotesDeleteProps {
    id: string
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

const NotesDelete = ({ id, children, side = "bottom", align, sideOffset = 0 }: NotesDeleteProps) => {
    const { execute, isLoading } = useAction(deleteNote, {
        onError: (error) => {

        }
    })

    const onDelete = () => {
        execute({
            id
        })
    }
    return (



        <Popover >
            <PopoverTrigger asChild >
                {children}
            </PopoverTrigger>
            <PopoverContent
                side={side}
                align={align}
                sideOffset={sideOffset}
            >


                <form action={onDelete} className="space-y-4 pt-9 " >
                    <div className="space-y-4">
                        <FormSubmit disabled={isLoading} variant="primary" className="w-[120px] px-auto">
                            <X />
                        </FormSubmit>
                    </div>
                </form>
                <PopoverClose asChild>
                    <Button
                        className="absolute bottom-4 right-2  w-[120px] mx-auto"
                        variant="ghost"
                    >
                        Cancel
                    </Button>
                </PopoverClose>
            </PopoverContent>
        </Popover>

    )

}

export default NotesDelete;