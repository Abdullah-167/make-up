import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const isBlogPage = router.pathname.startsWith('/detail');


    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(progress)
        }

        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])


    return (
        <div className={`sticky  ${isBlogPage ? 'top-0' : 'top-[85px]'}  z-[3000] left-0 w-full h-1.5 rounded-r-lg `}>
            <div
                className="h-full main-grd"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;