import React, { useState, useEffect } from "react";
import TicketBox from "./TicketBox";
import PaymentSummary from "./PaymentSummary";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import EmailInputDialog from "./EmailInputDialog";

const BookEvents = () => {
    const [ticketCounts, setTicketCounts] = useState({});
    const [email, setEmail] = useState("");
    const [types, setTypes] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [code, setCode] = useState("");
    const { user } = useSelector((state) => state.user);
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const { toast } = useToast();
    const { eventId } = useParams();
    const navigate = useNavigate();

    const handlePayment = async (setLoading) => {
        const obj = Object.entries(ticketCounts)
            .filter(([key, value]) => value > 0)
            .map(([type, quantity]) => ({ type, quantity }));

        if (obj.length == 0)
            return toast({
                title: "Payment Incomplete",
                description:
                    "Please select at least one ticket before proceeding with the payment.",
                variant: "destructive",
            });

        try {
            setLoading(true);
            await axios.post(BASE_URL + "/tickets/bookings", {
                emailId: email,
                eventId: eventId,
                tickets: obj,
            });
            toast({
                title: "Payment Successful",
                description:
                    "Your payment has been processed successfully. Thank you for booking with us!",
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast({
                title: "Payment Failed",
                description:
                    "There was an issue with processing your payment. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getTicketTypes = async () => {
            const res = await axios.get(BASE_URL + "/tickets/types/" + eventId);
            setTypes(res?.data?.ticketTypes);
            let emptyobj = {};
            res.data.ticketTypes.map(({ _id }) => (emptyobj[_id] = 0));
            console.log(emptyobj);
            setTicketCounts(emptyobj);
        };
        getTicketTypes();
    }, []);

    return (
        <div>
            <div className="flex flex-wrap gap-5 mb-5">
                {types?.map((type) => (
                    <TicketBox
                        key={type?._id}
                        id={type?._id}
                        type={type?.category}
                        ticketCount={ticketCounts}
                        setTicketCount={setTicketCounts}
                        price={type?.price}
                        // desc={"Allows entrance for one person only for one day"}
                        setTotalCost={setTotalCost}
                    />
                ))}
            </div>

            <PaymentSummary
                totalCost={totalCost}
                code={code}
                setCode={setCode}
                handlePayment={handlePayment}
                setEmail={setEmail}
                email={email}
            />
        </div>
    );
};

export default BookEvents;
