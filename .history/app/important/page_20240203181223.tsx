import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { format } from "date-fns";
import { redirect } from "next/navigation";


const important = async () => {


    const { userId } = auth();
    if (!userId) {
        redirect('/sign-in')
    }
    const notes = await db.note.findMany({
        where: {
            important: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div>
            {notes.map((note: any) => (
                <div
                    key={note.id}
                    style={{ backgroundColor: note.color }}
                    className="group relative aspect-square bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md h-full w-full p-2  text-center shadow-xl border border-red-600"
                >{note.title}

                    <p className="text-sm">Created at: {format(note.createdAt, "yyyy-MM-dd HH:mm:ss")}</p>
                </div>
            ))}
        </div>
    )
}

export default important;