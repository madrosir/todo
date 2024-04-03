"use client"
import { createNotes } from "@/action/create-notes";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useProModal } from "@/hooks/notesModal";
import { useAction } from "@/hooks/useAction";

import { useRef, ElementRef, useState, } from "react";

import { toast } from "sonner";
import { FormInput } from "../form/FormInput";
import { Button } from "../ui/button";
import FormData from "../form/FormDate";
import { useDateStore } from "@/hooks/dateStore";
import { TagsInput } from "react-tag-input-component";

import { Plus } from "lucide-react";





const NotesDialog = () => {
    const proModal = useProModal();
    const closeRef = useRef<ElementRef<"button">>(null);
    const date = useDateStore((state) => state.date);
    const [selectedColor, setSelectedColor] = useState<string>('#ff9999');
    const [isSelected, setISSelected] = useState(false)
    const setDate = useDateStore((state) => state.setDate);
    const [selected, setSelected] = useState([""
    ]);


    const { execute, fieldErrors } = useAction(createNotes, {
        onSuccess: (data) => {
            console.log(data);
            toast.success("Board created");
            closeRef.current?.click();
            setDate(undefined);
            setISSelected(false);

        },
        onError: (error) => {
            toast.error(error);
            proModal.onOpen()
        },
    });
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;





        execute({
            title,
            color: selectedColor,
            tags: selected,
            important: isSelected,
            expired: date

        });





    }
    const colorOptions = [

        "#fecaca",
        "#bfdbfe",
        "#bbf7d0",
        "#fef08a",
        "#ddd6fe",
        "#fbcfe8",
        "#c7d2fe",
        "#fed7aa",
        "#d9f99d",
        "#99f6e4",
        "#a5f3fc",
    ];

    function handleClick() {
        // Use the previous state value to set the new state value
        setISSelected((prevSelected) => !prevSelected);
    }

    return (
        <Dialog

        >
            <DialogTrigger asChild ref={closeRef}  >
                <Button className="text-md w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400 md:block lg:block" variant="ghost"> Create Notes  <Plus /> </Button>
            </DialogTrigger>
            <DialogContent >
                <DialogHeader>



                    <form action={onSubmit} className="space-y-4">
                        <div className="space-y-4">
                            <div className="w-full space-x-4">
                                <FormInput
                                    id="title"
                                    label=" Title:"
                                    type="text"
                                    className="my-10 h-9 w-full border border-gray-200 hover:shadow-lg"
                                    errors={fieldErrors}
                                    placeholder="Enter a title"
                                />
                            </div>
                        </div>
                        <div>
                            <span className="py-10">Tags:
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="tags"

                                />
                            </span>
                        </div>
                        <div>

                        </div>
                        <div>
                            <div className="text-md">
                                <span className="my-2 mr-5 inline-block font-semibold">Expiry date:</span>
                                <div className="relative">
                                    <FormData

                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex">
                                <div className="flex">
                                    <span className="text-md mr-3 mt-1 font-semibold"> Top priority:</span>
                                </div>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input className="peer sr-only" onClick={handleClick} value="" type="checkbox" />
                                    <div className="peer h-10 w-24 rounded-full bg-slate-300 outline-none duration-100 after:absolute after:left-1 after:top-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:font-bold after:text-slate-800 after:outline-none after:duration-500 after:content-['No'] peer-checked:after:translate-x-14 peer-checked:after:border-white peer-checked:after:content-['Yes'] peer-focus:outline-none">
                                    </div>
                                </label>
                            </div>



                        </div>
                        <div>
                            <span className="text-md my-2 font-semibold">Notes Color:</span>
                            <div className="my-3 flex">
                                {
                                    colorOptions.map((color, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedColor(color)}
                                            className="mr-3"
                                            style={{
                                                backgroundColor: color,
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',

                                                border: selectedColor === color ? '2px solid #000' : 'none',
                                            }}
                                        />
                                    ))
                                }
                            </div>
                        </div>


                        <div className="flex">
                            <Button className="w-full" variant="primary" type="submit"  >
                                Create Notes

                            </Button>
                        </div>
                    </form>

                </DialogHeader>
            </DialogContent>

        </Dialog >

    );
}

export default NotesDialog;
