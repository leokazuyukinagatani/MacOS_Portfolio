import {type ReactNode, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
} as const;

const renderText = (
    text: string,
    className: string,
    baseWeight: number = 400
): ReactNode[] => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (
    container: HTMLElement | null,
    type: keyof typeof FONT_WEIGHTS
): (() => void) => {
    if(!container) return () => {};

    const letters = container.querySelectorAll<HTMLSpanElement>("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animatedLetter = (
        letter: HTMLSpanElement,
        weight: number,
        duration: number = 0.25
    ): gsap.core.Tween => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    const handleMouseMove = (e: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter: HTMLSpanElement) => {
            const { left: l , width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animatedLetter(letter, min  + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () =>
        letters.forEach((letter: HTMLSpanElement) => animatedLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};
export const Welcome = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(()=>{
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            if (titleCleanup)
                titleCleanup();
            if (subtitleCleanup)
                subtitleCleanup();
        }
    },[])
    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Kazuyuki! Welcome to my",
                    "text-3xl font-georama",
                    100
                )}
            </p>
            <h1 ref={titleRef} className="mt-7">

                {renderText(
                    "portfolio",
                    "text-9xl italic font-georama"
                )}
            </h1>
            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
}