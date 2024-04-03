import { Plus } from "lucide-react";
import { Button } from "react-day-picker";

const FormButton = () => {
    return (<div><Button className="text-md w-full justify-between bg-slate-300 font-semibold shadow-md hover:bg-slate-400 max-md:block" variant="ghost"> Create Notes  <Plus /> </Button></div>);
}

export default FormButton;