"use client";

import { motion } from "framer-motion";

export default function Bell() {

    const rotationKeyframes = [0, 20, -15, 12.5, -10, 10, -7.5, 7.5, -5, 5, -1, 1, -0.5, 0.5, 0];
    const translationKeyframes = [0.0, 4, -3.75, 3.125, -2.5, 2.5, -1.875, 1.875, -1.25, 1.25, -1, 1, 0];

    return (
        <div className="flex flex-col h-svh justify-center items-center">
                {/* Bell SVG */}
                <motion.svg
                    className="inset-0"
                    width="112.5"
                    height="127.5"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        rotate: rotationKeyframes,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <path
                        d="M1.17969 13.3125H13.5625C14.2969 13.3125 14.7422 12.9375 14.7422 12.3672C14.7422 11.5859 13.9453 10.8828 13.2734 10.1875C12.7578 9.64844 12.6172 8.53906 12.5547 7.64062C12.5 4.64062 11.7031 2.57812 9.625 1.82812C9.32812 0.804688 8.52344 0 7.36719 0C6.21875 0 5.40625 0.804688 5.11719 1.82812C3.03906 2.57812 2.24219 4.64062 2.1875 7.64062C2.125 8.53906 1.98438 9.64844 1.46875 10.1875C0.789062 10.8828 0 11.5859 0 12.3672C0 12.9375 0.4375 13.3125 1.17969 13.3125Z"
                        fill="black"
                    />
                    <motion.path
                        d="M4.97656 13.628H9.76562C9.66406 15.4766 8.69531 16.4453 7.36719 16.4453C6.04688 16.4453 5.07812 15.4766 4.97656 14.3828Z"
                        fill="black"
                        animate={{
                            x: translationKeyframes,
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        style={{
                            translateX: "0px",
                            translateY: "0px",
                        }}
                    />

                    
                </motion.svg>
        </div>
    );
}
