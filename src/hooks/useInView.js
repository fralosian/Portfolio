// src/hooks/useInView.js
import { useState, useEffect } from 'react';

export const useInView = (ref) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;  // captura valor atual da ref

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            {
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);


    return isInView;
};
