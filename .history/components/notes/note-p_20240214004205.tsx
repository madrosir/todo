import { useState } from "react";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import { useAction } from "@/hooks/useAction";
import { Star } from "lucide-react";
import { updatePriority } from "@/action/update-priority";
import { Button } from "../ui/button";

interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`Content "${data.important}" updated!`);
        },
        onError: (error) => {
            toast.error(error);
        }
    });
    let defaultvalue = data.important
    const [isImportant, setIsImportant] = useState(defaultvalue);
    const onSubmit = () => {
        // Toggle the current state value
        setIsImportant((prevIsImportant) => !prevIsImportant);

        // Execute the action
        execute({
            id: data.id,
            important: isImportant, // Use the updated state value
        });
    };


    function handle() {
        setIsImportant((prevIsImportant) => !prevIsImportant);
    }


    console.log(data.important, "submit");

    return (
        <form onSubmit={onSubmit} className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">

            <Star
                onClick={handle}
                className={`${isImportant ? "fill-[#ffff00]" : ""}`}
                size={27}
            />

        </form>
    );
};
