import React, { useState, useEffect } from "react";

import TextInputBox from "./TextInputBox";
import SelectInputBox from "./SelectInputBox";
import PasswordInputBox from "./PasswordInputBox";
import { Link } from "react-router-dom";

import SocialmediaAuthBtn from "./SocialmediaAuthBtn";
import googlelogo from "../../assets/googleLogo.webp";
import fbLogo from "../../assets/fb.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader2, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const { toast } = useToast();

    const handleSignup = async () => {
        try {
            setLoading(true);
            if (
                name.trim().length === 0 ||
                email.trim().length === 0 ||
                password.trim().length === 0
            ) {
                toast({
                    variant: "destructive",
                    title: "Emter valid credentials.",
                });

                return;
            }
            if (password.trim().length < 8) {
                toast({
                    variant: "destructive",
                    title: "Enter valid password length should be < 7 ",
                });

                return;
            }
            if (password !== confirmPassword) {
                toast({
                    variant: "destructive",
                    title: "Password did not match",
                });
                return;
            }

            const res = await axios.post(BASE_URL + "/user", {
                name: name,
                email,
                password: password,
                role,
            });

            dispatch(setUser(res.data.data));
            navigate("/");
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
            });

            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const handleAuthWithGoogle = () => {};
    const handleAuthWithFacebook = () => {};

    return (
        <div className="bg-gradient-to-l from-gray-600 via-gray-300 dark:from-ston-900 dark:via-gray-800 to-background min-h-screen flex items-center justify-center cursor-default">
            <div className="flex w-[1000px] bg-gray-400 dark:bg-stone-900 rounded-[25px]  overflow-hidden flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-10 text-foreground">
                    <h2 className="text-xl font-bold">Sign up</h2>
                    <br />
                    <div className="space-y-3">
                        <TextInputBox
                            type="text"
                            placeholder="Full name"
                            Icon={User}
                            value={name}
                            setValue={setName}
                        />

                        <TextInputBox
                            type="text"
                            placeholder="abc@gmail.com"
                            Icon={Mail}
                            value={email}
                            setValue={setEmail}
                        />

                        <PasswordInputBox
                            placeholder="password"
                            value={password}
                            setValue={setPassword}
                        />

                        <PasswordInputBox
                            placeholder="Confirm password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                    </div>

                    <br />

                    <div className="flex items-center flex-col">
                        <Button
                            onClick={() => {
                                if (isLoading) return;
                                handleSignup();
                            }}
                            className={"max-w-fit px-20 mx-auto mb-8 "}
                        >
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                "SIGN UP"
                            )}
                        </Button>
                        <p className="text-gray-600 mb-4">OR</p>

                        <SocialmediaAuthBtn
                            img={googlelogo}
                            handleClick={handleAuthWithGoogle}
                            text={"Login with Google"}
                        />

                        <SocialmediaAuthBtn
                            img={fbLogo}
                            handleClick={handleAuthWithFacebook}
                            text={"Login with Facebook"}
                        />
                        <p>
                            Already have an account{" "}
                            <Link to="/signin" className="text-blue-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex w-1/2 overflow-hidden rounded-l-[25px]  ">
                    <img
                        src="https://previews.123rf.com/images/sentavio/sentavio1702/sentavio170200069/72686226-qatar-country-design-template-linear-flat-famous-historic-sight-cartoon-style-web-site-vector.jpg"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
