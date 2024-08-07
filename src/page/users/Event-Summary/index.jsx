import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EventSummary = () => {
    const [event, setEvent] = useState(null);
    const { eventId } = useParams();
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    BASE_URL + "/events/single-event/" + eventId
                );

                setEvent(res?.data?.data?.event?.details);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <div>
            {event ? (
                <>
                    <div
                        className="relative min-h-[30vh] max-h-[40vh] w-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${event?.images[0]})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="flex justify-between items-center py-5 bg-secondary mt-5 rounded-lg p-5 flex-wrap">
                        <div className="flex justify-center items-center gap-3">
                            <Calendar className="w-8 h-8 " />
                            <div>
                                Starts at : {event?.dates[0]?.split("T")[0]}{" "}
                                <br />
                                Ends at &nbsp;:{" "}
                                {
                                    event?.dates[
                                        event?.dates?.length - 1
                                    ]?.split("T")[0]
                                }
                            </div>
                        </div>{" "}
                        <Button asChild>
                            <Link to={`/ticket-booking/${eventId}`}>
                                Book now
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-xl">
                            <b>Title : {event?.name}</b>
                        </h2>

                        <h3 className="text-xl mt-2">Description : </h3>
                        <p className="indent-8 mt-2 text-justify">
                            {event?.description}
                        </p>
                        {/* <p></p> */}
                    </div>
                </>
            ) : (
                <>
                    <Skeleton className={"w-full h-[35vh]"} />

                    <Skeleton className={"w-full h-[8vh] mt-10"} />
                    <Skeleton className={"w-full md:w-1/2 h-10 mt-5"} />
                    <Skeleton className={"w-full md:w-1/3 h-10 mt-5"} />
                </>
            )}
        </div>
    );
};

export default EventSummary;
