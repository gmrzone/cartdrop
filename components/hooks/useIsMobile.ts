import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 992px)");
        const updateStatus = () => {
            setIsMobile(isMobile.matches);
        };
        updateStatus();
        isMobile.addEventListener("change", updateStatus);
        return () => {
            isMobile.removeEventListener("change", updateStatus);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
