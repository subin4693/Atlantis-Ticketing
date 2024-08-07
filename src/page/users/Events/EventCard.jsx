import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const EventCard = ({ id, image, title, date, location }) => {
    return (
        <Link to={`/event-summary/${id}`}>
            <Card className="group relative overflow-hidden rounded-2xl h-[250px]  ">
                <div className="relative h-full w-full">
                    <img
                        src={`${image && image[0]}`}
                        alt="image"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300"></div>
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                    <h5 className="text-lg font-semibold">Title: {title}</h5>
                    <h5 className="text-sm">
                        Date:{" "}
                        {date[0].split("T")[0] +
                            "--- " +
                            date[date.length - 1].split("T")[0]}
                    </h5>
                    {/* <h5 className="text-sm">Location: {location}</h5> */}
                </CardContent>
            </Card>
        </Link>
    );
};

export default EventCard;
