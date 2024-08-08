import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UserSidebar from "@/components/UserSidebar";

function UserLayout() {
    return (
        <main className="flex cursor-default min-h-screen">
            <div className="w-full   flex flex-col">
                <Navbar person={"User"} />
                 <div
                    className="flex-grow p-5 sm:p-10 md:20
bg-[url('https://i0.wp.com/974qa.net/wp-content/uploads/2024/05/Atlantis_The_Immersive_Odyssey_Msheireb_Galleria_Doha_Qatar_2024.jpg?fit=1920%2C1080')] bg-cover bg-center
                "
                >
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default UserLayout;
