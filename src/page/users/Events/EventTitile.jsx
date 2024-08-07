import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { DatePickerWithRange } from "@/components/DatePicker";
import useFirebaseUpload from "@/hooks/use-firebaseUpload";
import { useToast } from "@/components/ui/use-toast";
import { Trash } from "lucide-react";
const EventTitle = ({
    setTitle,
    title,
    setDescription,
    description,
    setShowTitleField,
    setImage,
    image,
    date,
    setDate,
    iosdate,
    setCategorys,
    categorys,
    handleConfirm,

    eventId,
    typeOne,
    typeTwo,
}) => {
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState(image);
    const { toast } = useToast();
    const navigate = useNavigate();
    const { progress, error, downloadURL, fileName } = useFirebaseUpload(img);
    const [step, setStep] = useState(1);
    useEffect(() => {
        if (error) {
            console.log(error);
            setLoading(false);
            return;
        } else if (downloadURL) {
            setImage(downloadURL);
            setLoading(false);
        }
    }, [error, downloadURL]);

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
        setLoading(true);
    };
    const handleNext = () => {
        if (step === 1) {
            if (
                title.trim() &&
                description.trim() &&
                iosdate &&
                iosdate?.length > 0 &&
                image
            ) {
                setStep(2);
            } else {
                toast({
                    variant: "destructive",
                    title: "All fields are required",
                });
            }
        } else if (step === 2) {
            handleConfirm(setLoading);
            // Perform save operation
            // Example: console.log({ title, description, image, date });
            // Reset state or close dialog here
        }
    };
    return (
        <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed overflow-hidden left-[50%] top-[50%] z-50 grid w-full max-w-[900px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
                <div className="flex">
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-center text-xl font-bold">
                                {step === 1 ? "Create Event" : "Create Tickets"}
                            </h1>
                            <div>
                                <Button
                                    onClick={() => {
                                        if (loading) return;
                                        if (step == 2) return setStep(1);

                                        return setShowTitleField(false);
                                    }}
                                >
                                    {step === 1 ? "Close" : "Back"}
                                </Button>{" "}
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                    onClick={() => {
                                        if (loading) return;
                                        handleNext();
                                    }}
                                >
                                    {loading ? (
                                        <Loader2 className="mx-2 h-4 w-4 animate-spin" />
                                    ) : step === 1 ? (
                                        "Next"
                                    ) : (
                                        "Create"
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div
                            className={`flex flex-col sm:flex-row gap-5 transition-transform duration-300 ${
                                step === 1
                                    ? "translate-x-0"
                                    : "-translate-x-full"
                            }`}
                        >
                            <div className="flex-1">
                                {step === 1 && (
                                    <div className="bg-input rounded-[25px] h-full overflow-hidden border group shadow-custom">
                                        <label className="h-full min-h-[300px] cursor-pointer flex items-center justify-center">
                                            <input
                                                type="file"
                                                className="hidden w-full"
                                                onChange={handleFileChange}
                                            />
                                            {image ? (
                                                <div className="relative">
                                                    <img
                                                        src={image}
                                                        className="w-full h-full max-h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div
                                                        className={`absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition duration-300`}
                                                    ></div>
                                                </div>
                                            ) : (
                                                <>
                                                    <ImageIcon className="size-20 text-gray-400" />
                                                </>
                                            )}
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 space-y-5">
                                {step === 1 && (
                                    <>
                                        <input
                                            type="text"
                                            className="bg-input rounded-[25px] p-2 w-full shadow-custom"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            placeholder="Event Title"
                                        />
                                        <DatePickerWithRange
                                            date={date}
                                            setDate={setDate}
                                            className="bg-input rounded-[25px] w-full shadow-custom"
                                        />
                                        <textarea
                                            rows="5"
                                            className="bg-input rounded-[25px] p-4 w-full shadow-custom resize-none overflow-auto box-border h-[60%]"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            placeholder="Event Description"
                                        />
                                    </>
                                )}
                            </div>
                            {step === 2 && (
                                <div
                                    className={`flex   w-full h-full flex-col sm:flex-row gap-5 transition-transform duration-300 ${
                                        step === 2
                                            ? "translate-x-full"
                                            : "-translate-x-0"
                                    }`}
                                >
                                    <div className="flex-1">
                                        {step === 2 && (
                                            <div className="md:flex gap-2 justify-between  ">
                                                <div className="flex-1">
                                                    <button
                                                        className="w-full rounded-md hover:bg-secondary   px-5 py-3"
                                                        onClick={() => {
                                                            setCategorys(
                                                                typeOne
                                                            );
                                                        }}
                                                    >
                                                        Standard
                                                    </button>

                                                    <button
                                                        className="w-full rounded-md hover:bg-secondary  px-5 py-3 mt-2"
                                                        onClick={() => {
                                                            setCategorys(
                                                                typeTwo
                                                            );
                                                        }}
                                                    >
                                                        New
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 space-y-5">
                                        {step === 2 && (
                                            <div className="w-full   flex-1 space-y-3">
                                                {" "}
                                                <div className="w-full   flex-1 space-y-3">
                                                    {categorys?.map(
                                                        (
                                                            { category, price },
                                                            index
                                                        ) => (
                                                            <div
                                                                className="flex gap-2  "
                                                                key={index}
                                                            >
                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        category
                                                                    }
                                                                    className="bg-input rounded-md p-3 pl-5 w-full shadow-custom outline-none"
                                                                    placeholder="Category"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        const newCategorys =
                                                                            [
                                                                                ...categorys,
                                                                            ];
                                                                        newCategorys[
                                                                            index
                                                                        ] = {
                                                                            ...newCategorys[
                                                                                index
                                                                            ],
                                                                            category:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        };
                                                                        setCategorys(
                                                                            newCategorys
                                                                        );
                                                                    }}
                                                                />
                                                                <input
                                                                    value={
                                                                        price
                                                                    }
                                                                    type="text"
                                                                    className="bg-input rounded-md p-3 pl-5 w-full shadow-custom outline-none"
                                                                    placeholder="Price"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        if (
                                                                            isNaN(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        )
                                                                            return;
                                                                        const newCategorys =
                                                                            [
                                                                                ...categorys,
                                                                            ];
                                                                        newCategorys[
                                                                            index
                                                                        ] = {
                                                                            ...newCategorys[
                                                                                index
                                                                            ],
                                                                            price: e
                                                                                .target
                                                                                .value,
                                                                        };
                                                                        setCategorys(
                                                                            newCategorys
                                                                        );
                                                                    }}
                                                                />
                                                                <Button
                                                                    variant="destructive"
                                                                    onClick={() => {
                                                                        const newCategorys =
                                                                            [
                                                                                ...categorys,
                                                                            ];
                                                                        const newval =
                                                                            newCategorys.filter(
                                                                                (
                                                                                    cat,
                                                                                    ind
                                                                                ) =>
                                                                                    index !==
                                                                                    ind
                                                                            );
                                                                        setCategorys(
                                                                            newval
                                                                        );
                                                                    }}
                                                                >
                                                                    <Trash />
                                                                </Button>
                                                            </div>
                                                        )
                                                    )}
                                                    <button
                                                        className="border border-1 w-full rounded-md hover:bg-secondary cursor-default px-5 py-3 mt-2"
                                                        onClick={() => {
                                                            const newCategorys =
                                                                [...categorys];
                                                            newCategorys.push({
                                                                category: "",
                                                                price: "",
                                                            });
                                                            setCategorys(
                                                                newCategorys
                                                            );
                                                        }}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTitle;
