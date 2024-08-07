import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    Calendar,
    DoorClosed,
    MessageCircleQuestion,
    Settings,
    User,
    LayoutDashboard,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../features/userSlice";
import { clearItems } from "../features/itemSlice";
import { setClient } from "../features/clientSlice";
import { setUserDetail } from "@/features/userDetailSlice";

const UserSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    const { userDetail } = useSelector((state) => state.userDetail);

    const handleSignout = () => {
        dispatch(setUser({}));
        dispatch(setClient({}));
        dispatch(clearItems());
        dispatch(setUserDetail());
        navigate("/");
    };
    return (
        <div className="sticky p-1 sm:p-5  md:px-10 left-0 top-0 bg-muted h-screen border z-10 ">
            <h1 className="font-bold text-lg sm:text-2xl w-full sm:w-[190px]">
                <span className="hidden sm:inline">Qatar </span>Event Hub
            </h1>
            <div className="h-[80vh]">
                <div className="flex justify-center items-center gap-2 mt-10">
                    {userDetail && userDetail.profile_photo ? (
                        <Link to="/users/update">
                            <Avatar className="w-14 h-14">
                                <AvatarImage src={userDetail.profile_photo} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Link>
                    ) : (
                        <Link to="/users/update">
                            <Avatar className="w-14 h-14">
                                <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Link>
                    )}

                    <div className="hidden sm:inline">
                        <h3 className="font-bold">{user?.name}</h3>
                        <h2 className="">{user?.email}</h2>
                        <h2>Role - {user?.role}</h2>
                    </div>

                    <br />
                </div>

                <div className="flex flex-col mt-8 items-center">
                    <NavLink
                        to="profile"
                        className={({ isActive }) =>
                            isActive
                                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
                        }
                    >
                        <User />
                        <span className="hidden sm:inline">
                            &nbsp;&nbsp; &nbsp;My profile
                        </span>
                    </NavLink>
                    <NavLink
                        to="dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
                        }
                    >
                        <LayoutDashboard />
                        <span className="hidden sm:inline">
                            &nbsp;&nbsp; &nbsp;Dashboard
                        </span>
                    </NavLink>
                    <NavLink
                        to="events"
                        className={({ isActive }) =>
                            isActive
                                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
                        }
                    >
                        <Calendar />
                        <span className="hidden sm:inline">
                            {" "}
                            &nbsp;&nbsp; &nbsp;Events
                        </span>
                    </NavLink>
                    <NavLink
                        to="settings"
                        className={({ isActive }) =>
                            isActive
                                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
                        }
                    >
                        <Settings />
                        <span className="hidden sm:inline">
                            &nbsp;&nbsp; &nbsp;Settings
                        </span>
                    </NavLink>
                    <NavLink
                        to="help"
                        className={({ isActive }) =>
                            isActive
                                ? "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full  bg-background "
                                : "p-3 px-4 rounded-lg mt-2 flex items-center duration-200 w-fit sm:w-full hover:bg-background "
                        }
                    >
                        <MessageCircleQuestion />{" "}
                        <span className="hidden sm:inline">
                            {" "}
                            &nbsp;&nbsp; &nbsp;Help & FAQs
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className="flex justify-center">
                <Button className="hidden sm:inline" onClick={handleSignout}>
                    Sign out
                </Button>
                <Button
                    onClick={handleSignout}
                    className="inline sm:hidden flex items-center justify-center"
                    size="icon"
                >
                    <DoorClosed />
                </Button>
            </div>
        </div>
    );
};

export default UserSidebar;
