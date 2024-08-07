import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import ServiceDetails from "./ServiceDetails";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardContainer = ({
    selectedService,
    servicesList,
    handleBookings,
    bookings,
    itemsLoading,
}) => {
    const [singleService, setSingleService] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-10">
            <Dialog>
                {!itemsLoading ? (
                    servicesList &&
                    servicesList[selectedService?._id]?.map((service) => (
                        <DialogTrigger
                            onClick={() => setSingleService(service)}
                        >
                            <Card
                                className={`group relative overflow-hidden rounded-2xl text-left      
                             
                               `}
                            >
                                <div className="relative">
                                    <img
                                        src={`${
                                            service?.images &&
                                            service?.images[0]
                                        }`}
                                        alt="image"
                                        className="min-h-[300px]    w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className={`absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 ${
                                            bookings.includes(service._id) &&
                                            "bg-opacity-70"
                                        } transition duration-300`}
                                    ></div>
                                </div>
                                <CardContent
                                    className={`absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4 ${
                                        bookings.includes(service._id) &&
                                        "opacity-100"
                                    }`}
                                >
                                    <h5 className="text-lg font-semibold">
                                        Title: {service?.name}
                                    </h5>

                                    {service?.price && (
                                        <h5 className="text-sm">
                                            Cost: {service?.price}
                                        </h5>
                                    )}

                                    {service?.location && (
                                        <h5 className="text-sm">
                                            Location: {service?.location}
                                        </h5>
                                    )}
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                    ))
                ) : (
                    <>
                        <Skeleton className={"h-[300px]"} />
                        <Skeleton className={"h-[300px]"} />
                        <Skeleton className={"h-[300px]"} />
                    </>
                )}
                <ServiceDetails
                    singleService={singleService}
                    handleBookings={handleBookings}
                    selectedService={selectedService}
                    bookings={bookings}
                />
            </Dialog>
        </div>
    );
};

export default ServiceCardContainer;
