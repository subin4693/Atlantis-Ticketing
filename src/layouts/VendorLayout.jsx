import React from "react";
import { Outlet } from "react-router-dom";
import VendorSidebar from "@/components/VendorSidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function VendorLayout() {
    return (
        <main className="flex cursor-default">
            <VendorSidebar />

            <div className="w-full   flex flex-col">
                <Navbar person={"Vendor"} />
                <div className="flex-grow p-5 sm:p-10 md:20">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default VendorLayout;
