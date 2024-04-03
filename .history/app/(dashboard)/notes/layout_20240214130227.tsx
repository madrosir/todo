import Navbar from "@/components/nav/navbar";
import Sidebar from "@/components/nav/sidebar";






const DashboardLayout = ({

    children

}: {
    children: React.ReactNode;
}) => {

    return (

        <div className="  h-full bg-slate-1000  overflow-y-auto  ">
            <Navbar />

            <main className="w-full flex pr-10  ">

                <Sidebar />
                <div className="items-between     justify-between  w-full pl-12">
                    {children}
                </div>
            </main >
            <div >

            </div>
        </div>

    );
}

export default DashboardLayout;
