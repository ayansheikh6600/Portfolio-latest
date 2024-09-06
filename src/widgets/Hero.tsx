import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="bg-black">
            <div className='custom-radial-gradient from-gradient-start to-gradient-end py-10'>

            <div className="sm:container p-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center py-16">
                    <div className="flex flex-col justify-center gap-2 sm:gap-4 text-center md:text-left">
                        <h3 className="text-start  sm:text-xl md:text-3xl text-[#ffffffe5] font-bold">
                            I am Ayan Sheikh
                        </h3>
                        <h1 className="text-start  text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-[#ffffffe5] bg-clip-text text-transparent">
                            MERN Stack Developer + <br />
                            React Native Developer
                        </h1>
                        <p className="text-start  text-sm md:text-lg text-[#ffffffe5]">
                            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-6 md:mt-0">
                        <div className="w-[220px] h-[270px] sm:w-[250px] md:w-[300px] sm:h-[300px] md:h-[350px]  rounded-3xl rotate-[5deg] hover:rotate-0 transition-transform border-4 duration-700 ease-in-out border-[#55339b] hover:border-primary custom-radial-gradient ">
                        <Image alt='' src={"/ayan.png"} height={1200} width={1200} className='w-full h-[100%]  object-cover rounded-3xl'/>
                        
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full mt-10 gap-6">
                    <div className="text-[#ffffffe5] flex flex-col items-center justify-center gap-2">
                        <h4 className="text-4xl md:text-5xl font-bold">
                            03
                        </h4>
                        <p className="text-sm md:text-base">Years Of <br /> Experience</p>
                    </div>
                    <div className="text-[#ffffffe5] flex flex-col items-center justify-center gap-2">
                        <h4 className="text-4xl md:text-5xl font-bold">
                            06+
                        </h4>
                        <p className="text-sm md:text-base">Project <br /> Completed</p>
                    </div>
                    <div className="text-[#ffffffe5] flex flex-col items-center justify-center gap-2">
                        <h4 className="text-4xl md:text-5xl font-bold">
                            04+
                        </h4>
                        <p className="text-sm md:text-base">Happy <br /> Clients</p>
                    </div>
                    <div className="text-[#ffffffe5] flex flex-col items-center justify-center gap-2">
                        <h4 className="text-4xl md:text-5xl font-bold">
                            03+
                        </h4>
                        <p className="text-sm md:text-base">Business <br /> Built</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;
