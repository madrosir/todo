"use client"


import { useState } from "react";
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







    const onSubmit = (FormData: FormData) => {


        execute({
            id: data.id,
            important: isImportant,
        })
    };
    console.log(data.important, "submit")

    function Update() {
        setIsImportant((preconnect) => !preconnect)
    }




    return (
        <form action={onSubmit} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">


            <Star
                onClick={Update}
                type="button"
                className={`${isImportant ? "fill-[#ffff00]" : ""} `}
                size={27}
            />


        </form>
    )
}
