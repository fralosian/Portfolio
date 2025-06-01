// src/hooks/useInView.js
import { useState, useEffect } from 'react';

export const useInView = (ref) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            {
                threshold: 0.1, // Define quanto do elemento precisa estar visível (0.1 = 10%)
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isInView;
};
