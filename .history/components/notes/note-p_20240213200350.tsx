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
            toast.success(`Content "${data.important}" updated!`);
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const [isImportant, setIsImportant] = useState(data.important);
    const onSubmit = () => {
        setIsImportant((prevIsImportant) => !prevIsImportant);
        execute({
            id: data.id,
            important: isImportant,
        });
    };




    console.log(data.important, "submit");

    return (
        <form action={onSubmit} className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">
            <Star
                onClick={onSubmit}
                type="button"
                className={`${isImportant ? "fill-[#ffff00]" : ""}`}
                size={27}
            />
        </form>
    );
};
