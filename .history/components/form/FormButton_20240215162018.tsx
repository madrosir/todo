import { Plus } from "lucide-react";
import { Button } from "../ui/button";


const FormButton = () => {
    return (<div className="hidden md:block lg:block">
        <div><Button className="text-md w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400" variant="ghost"> Create Notes  <Plus className="items-center justify-center" /> </Button></div>
        <div className="block md:hidden lg:hidden"  ><Plus /></div>
        <Plus className="block md:hidden lg:hidden" />
    </div>);
}

export default FormButton;