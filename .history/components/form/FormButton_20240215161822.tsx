import { Plus } from "lucide-react";
import { Button } from "../ui/button";


const FormButton = () => {
    return (<div>
        <div><Button className="text-md w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400 md:block lg:block" variant="ghost"> Create Notes  <Plus className="items-center justify-center" /> </Button></div>

        <Plus className="sm:block md:hidden lg:hidden" />
    </div>);
}

export default FormButton;