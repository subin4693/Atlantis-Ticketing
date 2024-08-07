import { useState, useEffect } from "react";

function useImageToBase64(file) {
    const [base64, setBase64] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!file) {
            setBase64(null);

            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setBase64(reader.result);
        };
        reader.onerror = (error) => {
            console.log("Error converting file to base644; ", error);
        };
    }, [file]);

    return { base64, error };
}

export default useImageToBase64;
