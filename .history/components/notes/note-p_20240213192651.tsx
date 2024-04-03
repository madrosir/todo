import { updatePriority } from "@/action/update-priority";
import { useAction } from "@/hooks/useAction";
import { Note } from "@prisma/client";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface NotesListProps {
    data: Note;
}

export const UpdatePriority = ({ data }: NotesListProps) => {
    const { execute } = useAction(updatePriority, {
        onSuccess: (data) => {
            toast.success(`Note priority updated to ${data.important ? 'important' : 'not important'}`); // Use appropriate message
            setIsImportant(data.important);
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const [isImportant, setIsImportant] = useState(data.important);

    const onSubmit = () => {
        execute({
            id: data.id,
            important: isImportant,
        }); // No need to include noteId if it's not used
    };

    const handleToggleImportant = () => {
        setIsImportant((preconnect) => !preconnect);
    };

    return (
        <form action={onSubmit} className="flex text-start h-full xl:text-lg lg:text-sm md:text-sm">
            <Star
                onClick={handleToggleImportant} // Use meaningful function name
                type="button"
                className={`${isImportant ? 'fill-[#ffff00]' : ''}`}
                size={27}
            />
        </form>
    );
};
