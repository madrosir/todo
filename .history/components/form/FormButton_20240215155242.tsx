import { Plus } from "lucide-react";
import { Button } from "../ui/button";


export default const FormButton = () => {
    return (<div><Button className="text-md w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400 max-md:block" variant="ghost"> Create Notes  <Plus /> </Button>
        <Plus />
    </div>);
}

export default FormButton;