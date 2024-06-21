import React from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

type Props = {
    children: React.ReactNode;
    reappear?: boolean;
    threshold?: number;
};

const AnimateOnScroll: React.FC<Props> = ({ children, reappear, threshold = 0.5 }) => {
    const [containerRef, isVisible] = useElementOnScreen({
        threshold: threshold,
        reappear: reappear,
    });

    return (
        <div
            ref={containerRef}
            className={`transition duration-1000 ${isVisible ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-lg -translate-x-20"} motion-reduce:transition-none motion-reduce:hover:transform-none`}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
