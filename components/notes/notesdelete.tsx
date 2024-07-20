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

interface NotesDeleteProps {
    id: string
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

const NotesDelete = ({ id, children, side = "bottom", align, sideOffset = 0 }: NotesDeleteProps) => {
    const { execute, isLoading } = useAction(deleteNote, {
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
                <form action={onDelete} className="" >
                    <div className="">
                        <FormSubmit disabled={isLoading} variant="primary" className="w-15">
                            Yes
                        </FormSubmit>
                    </div>
                </form>
                <PopoverClose asChild>
                    <Button
                        className="w-15 absolute bottom-4 right-2"
                        variant="ghost"
                    >
                        No
                    </Button>
                </PopoverClose>
            </PopoverContent>
        </Popover>

    )

}

export default NotesDelete;