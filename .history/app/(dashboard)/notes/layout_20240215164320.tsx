import NotesDialog from "@/components/modal/NotesDialog";
import Navbar from "@/components/nav/navbar";
import Sidebar from "@/components/nav/sidebar";






const DashboardLayout = ({

    children

}: {
    children: React.ReactNode;
}) => {

    return (

        <main className="h-full overflow-y-auto bg-slate-200">
            <Navbar />

            <div className="flex w-full pr-10">

                <Sidebar />
                <div className="items-between w-full justify-between pl-12">
                    {children}
                </div>
            </div >
            <div className="block md:hidden lg:hidden">
                <NotesDialog />
            </div>
        </main>

    );
}

export default DashboardLayout;
