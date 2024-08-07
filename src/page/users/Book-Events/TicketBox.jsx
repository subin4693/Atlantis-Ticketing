import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React from "react";

const TicketBox = ({
    id,
    type,
    ticketCount,
    setTicketCount,
    price,
    desc,
    setTotalCost,
}) => {
    return (
        <div className="bg-secondary p-5 rounded-xl  w-full md:w-[350px] shadow-lg ">
            <h1>{type}</h1>
            <p className="font-bold mt-2">{price} QAR</p>
            <div className="flex items-center gap-5 mt-3">
                <Button
                    className=" hover:border-gray-700"
                    disabled={ticketCount[id] == 0}
                    onClick={() => {
                        setTotalCost((prev) => prev - price);
                        const tempTicketCount = { ...ticketCount };
                        tempTicketCount[id] -= 1;
                        return setTicketCount(tempTicketCount);
                    }}
                    variant="outline"
                    size="icon"
                >
                    <Minus />
                </Button>
                {ticketCount[id]}
                <Button
                    className=" hover:border-gray-700"
                    onClick={() => {
                        setTotalCost((prev) => prev + price);
                        const tempTicketCount = { ...ticketCount };
                        tempTicketCount[id] += 1;
                        return setTicketCount(tempTicketCount);

                        // return seteTicketCount((prev) => prev + 1);
                    }}
                    variant="outline"
                    size="icon"
                >
                    <Plus />
                </Button>
            </div>
            <p className="text-sm">{desc}</p>
        </div>
    );
};

export default TicketBox;
