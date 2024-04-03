import Navbar from "@/components/nav/navbar";
import Sidebar from "@/components/nav/sidebar";






const DashboardLayout = ({

    children

}: {
    children: React.ReactNode;
}) => {

    return (

        <div className="h-full overflow-y-auto bg-slate-200">
            <Navbar />

            <main className="flex w-full pr-10">

                <Sidebar />
                <div className="items-between w-full justify-between pl-12">
                    {children}
                </div>
            </main >
            <div >

            </div>
        </div>

    );
}

export default DashboardLayout;
