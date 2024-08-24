"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const services = [
    { id: 1, title: "Branding Design", description: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people." },
    { id: 2, title: "Web Design", description: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people." },
    { id: 3, title: "UI/UX Design", description: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people." },
    { id: 4, title: "Graphics Design", description: "I break down complex user experience problems to create integrity-focused solutions that connect billions of people." },
];

export default function QualityServices() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setPrevIndex(activeIndex);
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        setPrevIndex(0);
    };

    return (
        <div className="bg-black py-10">
            <div className="sm:container text-white p-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-[#ffffffe5] bg-clip-text text-transparent">My Quality Services</h2>
                    <p className="mb-8 w-[80%] mx-auto">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                </div>
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            {/* Background color transition */}
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="bg"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#1e064b] rounded-md"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.9 }}
                                />
                            )}

                            {prevIndex === index && activeIndex !== index && (
                                <motion.div
                                    layoutId="bg"
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#1e064b] rounded-md"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.9 }}
                                />
                            )}

                            <div className={`relative flex items-center justify-between p-6 cursor-pointer transition-all duration-500 ease-in-out border-b border-b-primary ${
                                activeIndex === index ? "text-white" : "text-white hover:text-white"
                            }`}>
                                <div className="flex items-center space-x-4">
                                    <span className="text-lg font-semibold">{`0${service.id}`}</span>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                </div>
                                <div className="flex items-center justify-between space-x-4">
                                    <p className="hidden sm:block w-[80%]">{service.description}</p>
                                    <BsArrowRight
                                        size={34}
                                        className={`transition-all duration-500 font-bold ${
                                            activeIndex === index
                                                ? "-rotate-45"
                                                : prevIndex === index
                                                ? "-rotate-45"
                                                : "rotate-45 text-primary"
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
