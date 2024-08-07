import React from "react";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ServiceDetails = ({
    singleService,
    handleBookings,
    selectedService,
    bookings,
}) => {
    return (
        <DialogContent className="mx -5">
            <div className=" sm:flex w-full gap-10 flex-wrap">
                <div className="flex-1  overflow-hidden rounded-xl">
                    <img
                        src={` ${
                            singleService?.images && singleService?.images[0]
                        }`}
                        alt="image"
                        className="w-full h-full min-h-[300px] object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col">
                    <DialogHeader className="h-[90%]  ">
                        <DialogTitle>Name : {singleService?.name}</DialogTitle>
                        <DialogDescription className="text-justify  text-lg ">
                            {singleService?.description && (
                                <>
                                    {" "}
                                    <p className="  line-clamp-4 ">
                                        <strong className="text-white/80">
                                            Description
                                        </strong>{" "}
                                        : {singleService?.description}
                                    </p>
                                </>
                            )}

                            {singleService?.price && (
                                <>
                                    <strong className="text-white/80">
                                        Cost :{" "}
                                    </strong>{" "}
                                    {singleService?.price}
                                </>
                            )}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-4  ">
                        <DialogClose asChild>
                            {bookings?.includes(singleService?._id) ? (
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() =>
                                        handleBookings(
                                            selectedService,
                                            singleService
                                        )
                                    }
                                >
                                    Remove
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() =>
                                        handleBookings(
                                            selectedService,
                                            singleService
                                        )
                                    }
                                >
                                    Book
                                </Button>
                            )}
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default ServiceDetails;
