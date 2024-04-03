"use client"


import { useState } from "react";
import { toast } from "sonner";


import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { updatecontent } from "@/action/add-content";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";
import { preconnect } from "react-dom";
import { Button } from "../ui/button";









interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`content "${data.important}" updated!`);


        },
        onError: (error) => {
            toast.error(error);
        }

    })




    const [isImportant, setIsImportant] = useState(data.important);







    const onSubmit = () => {


        execute({
            id: data.id,
            important: isImportant,
            noteId: "",


        })
    };
    console.log(isImportant, "submit")

    function Update() {
        setIsImportant((preconnect) => !preconnect)
    }




    return (
        <form action={onSubmit} className="flex  text-start  h-full  xl:text-lg lg:text-sm md:text-sm ">


            <Star
                onClick={Update}
                type="button"
                className={`${isImportant ? "fill-[#ffff00]   " : ""} w-12`}
            />


        </form>
    )
}
