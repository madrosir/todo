import FormButton from "@/components/form/FormButton";
import Navbar from "@/components/nav/navbar";
import Sidebar from "@/components/nav/sidebar";






const DashboardLayout = ({

    children

}: {
    children: React.ReactNode;
}) => {

    return (

        <div className="relative h-full overflow-y-auto bg-slate-200">
            <Navbar />

            <main className="flex w-full pr-10">

                <Sidebar />
                <div className="items-between w-full justify-between pl-12">
                    {children}
                </div>
                <div className="buttom-0 absolute right-0">
                    <FormButton />
                </div>
            </main >
            <div >

            </div>

        </div>

    );
}

export default DashboardLayout;
