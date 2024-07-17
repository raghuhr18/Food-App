import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const HandleOnline = () => {
            setIsOnline(true);
        }
        const HandleOffline = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", HandleOnline )
        window.addEventListener("offline", HandleOffline )

        return () => {
            window.removeEventListener("online", HandleOnline )
            window.removeEventListener("offline", HandleOffline )
        }
    },[])
    return isOnline;
}
export default useOnline;