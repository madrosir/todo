import { deleteNote } from "@/action/delete-notes";
import { Button } from "../ui/button";

interface NotesProps {
    title: string;
    id: string;
}





const Notes = ({ title, id }: NotesProps) => {
    const deleteNotes = deleteNote.bind(null, id)
    return (<form className="flex items-center gap-x-2" action={deleteNote}>
        <p>
            Board title : {title}
        </p>
        <Button variant="destructive">
            Delete
        </Button>
    </form>);
}

export default Notes;