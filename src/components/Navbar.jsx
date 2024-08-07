import React from "react";
import { ModeToggle } from "./mode-toggle";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "@/features/userSlice";
const Navbar = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleSignout = () => {
        dispatch(setUser(null));
    };
    return (
        <nav className="bg-primary flex justify-between items-center p-4 ">
            <Link to="/">
                <img
                    src={logo}
                    loading="lazy"
                    sizes="(max-width: 479px) 55vw, (max-width: 767px) 220px, 230px"
                    srcSet="https://cdn.prod.website-files.com/6613d427c0b983644d4d9917/6613d79d8e650e6c55a50cd7_atlantis-logo-p-500.png 500w, https://cdn.prod.website-files.com/6613d427c0b983644d4d9917/6613d79d8e650e6c55a50cd7_atlantis-logo-p-800.png 800w, https://cdn.prod.website-files.com/6613d427c0b983644d4d9917/6613d79d8e650e6c55a50cd7_atlantis-logo.png 1000w"
                    alt="Atlantis Logo"
                    className="block  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
            </Link>
            {/* <h2 className="font-bold text-xl text-white">
                Welcome to Event hub
            </h2> */}
            <div className="flex items-center justify-center gap-5">
                <ModeToggle />
                {user?.id ? (
                    <Button variant="secondary" onClick={handleSignout}>
                        Logout
                    </Button>
                ) : (
                    <Button variant="secondary" asChild>
                        <Link to="/signin">Login</Link>
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
