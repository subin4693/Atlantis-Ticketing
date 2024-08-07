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
                <div className="flex-grow p-5 sm:p-10 md:20">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default UserLayout;
