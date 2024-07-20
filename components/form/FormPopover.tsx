"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/useAction";
import { createNotes } from "@/action/create-notes";

import { useProModal } from "@/hooks/notesModal";
import { useRef, ElementRef, useState, } from "react";
import { toast } from "sonner";
import { FormSubmit } from "./FormSubmit";
import { FormInput } from "./FormInput";

import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Input } from "../ui/input";






interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
}

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const [selectedColor, setSelectedColor] = useState<string>('#ff9999');
    const [isSelected, setISSelected] = useState(false)
    const ProModal = useProModal();
    const [selected, setSelected] = useState<Date>()
    const [date, setDate] = useState(false)

    const { execute, fieldErrors } = useAction(createNotes, {
        onSuccess: (data) => {
            console.log(data);
            toast.success("Board created");
            closeRef.current?.click();
        },
        onError: (error) => {
            toast.error(error);
            ProModal.onOpen();
        },
    });
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        const tagsString = formData.get("tags") as string;

        // Convert the tagsString into an array of strings
        const tags = tagsString.split(',').map(tag => tag.trim()); // Corrected type casting



        execute({
            title,
            color: selectedColor,
            tags,
            important: isSelected,
            expired: selected

        });
    };
    const colorOptions = ['#ff9999', '#99ccff', '#99ff99', '#ffcc99', '#cc99ff', '#ffffcc']

    function handleClick() {
        // Use the previous state value to set the new state value
        setISSelected((prevSelected) => !prevSelected);
    }


    return (
        <Popover>
            <PopoverTrigger asChild ref={closeRef}>
                {children}
            </PopoverTrigger>
            <PopoverContent
                side={side}
                align={align}
                sideOffset={sideOffset}
            >
                <div className="text-md pb-4 text-center font-medium text-neutral-600">
                    Create Notes
                </div>
                <PopoverClose asChild>
                    <Button
                        className="absolute right-2 top-2 h-auto w-auto p-2 text-neutral-600"
                        variant="ghost"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            {colorOptions.map((color, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSelectedColor(color)}
                                    style={{
                                        backgroundColor: color,
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        border: selectedColor === color ? '2px solid #000' : 'none',
                                    }}
                                />
                            ))}
                        </div>
                        <div>
                            <button onClick={handleClick} type="button">Toggle</button>
                            {isSelected ? <p>On</p> : <p>Off</p>}
                        </div>                        <div>
                            <Input type="text" name="tags" id="tags" className="w-full border-2" />
                        </div>


                        <FormInput
                            id="title"
                            label="Notes Title"
                            type="text"
                            className="border-3 w-full"
                            errors={fieldErrors}
                        />
                        <Popover>
                            <PopoverTrigger asChild ref={closeRef}>

                                <Button
                                    variant={"outline"}
                                    type="submit"
                                    className={cn(
                                        "w-[240px] pl-3 text-left font-normal",
                                        !selected && "text-muted-foreground"
                                    )}
                                >
                                    {selected ? (
                                        format(selected, "PPP")
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>

                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">

                                <Calendar
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}

                                    disabled={(date) => date === new Date() || date === new Date("")}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>

                        <FormSubmit className="w-full" variant="primary" >
                            Create Notes

                        </FormSubmit>

                    </div>
                </form>

            </PopoverContent>
        </Popover>

    )


}

