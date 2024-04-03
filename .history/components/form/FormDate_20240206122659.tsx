// FormData.tsx
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { format, setDate } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { ElementRef, useRef, useState } from "react";
import { useDateStore } from "@/hooks/dateStore";
import { date } from "zod";

const FormData = () => {
    const date = useDateStore((state) => state.date);
    const setDate = useDateStore((state) => state.setDate);
    const closeRef = useRef<ElementRef<"button">>(null);


    return (
        <div>
            <Popover>
                <PopoverTrigger asChild ref={closeRef}>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[200px] pl-3 text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        {date ? (
                            format(date, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar

                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date); // set the date value
                            closeRef.current?.click(); // simulate a click event on the popover trigger element
                        }}
                        className="bg-white rounded-lg border-2 siz:sm"
                        disabled={(date) => date === new Date() || date === new Date("")}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};
export default FormData;