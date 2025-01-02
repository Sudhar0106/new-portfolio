import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const BounceInDownButton = (props) => {

    const ref = useRef(null);
    const isInview = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInview) {
            mainControls.start({ opacity: 1, y: 0 });
        }
    }, [isInview])

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: 50 }}
                animate={mainControls}
                {...props}
            />
        </div>
    )
}

export const FadeInWhenVisible = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false }}
            transition={{ type: "spring", delay: .2, duration: 0.8 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 1, scale: .8 }
            }}
        >
            {children}
        </motion.div>
    );
}

export function TypingText({value}) {
    const text = value.split(" ");

    return (
        text.map((el, i) => (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    delay: i / 10
                }}
                key={i}
            >
                {el}{" "}
            </motion.span>
        ))
    );
}

export default TypingText;
