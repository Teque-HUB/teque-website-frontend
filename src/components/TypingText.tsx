"use client";
import React, { useState, useEffect } from "react";

interface TypingTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, className, speed = 100, delay = 500 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (started && index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed, started]);

    return <span className={className}>{displayedText}</span>;
};

export default TypingText;
