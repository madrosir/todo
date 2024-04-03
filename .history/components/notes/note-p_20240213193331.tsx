"use client"


import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";

import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";










interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`content "${data.important}" updated!`);
            setIsImportant(data.important);

        },
        onError: (error) => {
            toast.error(error);
        }

    })




    const [isImportant, setIsImportant] = useState(data.important);


    const formRef = useRef<ElementRef<'form'>>(null);





    const onSubmit = () => {


        execute({
            id: data.id,
            important: isImportant,
        })
        setIsImportant(true)
    };
    console.log(data.important, "submit")





    return (
        <form onClick={onSubmit} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">


            <Star

                type="button"
                className={`${isImportant ? "fill-[#ffff00]" : ""} `}
                size={27}
            />


        </form>
    )
}
