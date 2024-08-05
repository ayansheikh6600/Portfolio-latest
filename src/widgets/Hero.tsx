import React from 'react'

const Hero = () => {
    return (
        <div className=' '>

            <div className='sm:container p-2 custom-radial-gradient from-gradient-start to-gradient-end py-[30px] '>

                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center  py-[60px]'>
                    <div className='sm:w-[80%] w-full md:w-[100%] flex flex-col it justify-center gap-3'>
                        <h3 className='text-2xl md:text-3xl text-[#ffffffe5] font-bold'>
                            I am Ayan Sheikh
                        </h3>
                        <h1 className='text-3xl md:text-5xl font-bold  bg-gradient-to-r from-primary to-[#ffffffe5]  bg-clip-text text-transparent'>
                            MERN Stack Developer + <br />
                            React Native Developer
                        </h1>
                        <p className='pr-9 text-base md:text-lg text-[#ffffffe5]'>
                            I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                        </p>
                        <div>

                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-6 sm:mt-0'>

                        <div className='w-[300px] h-[350px] rounded-3xl rotate-6 hover:rotate-0 transition-all border-[3px] duration-500 ease-in-out border-[#55339b] hover:border-primary bg-white'>

                        </div>

                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full mt-[20px]'>
                    <div className='text-[#ffffffe5] flex items-center justify-center gap-2'>
                        <h4 className='text-5xl font-bold '>
                            03
                        </h4>
                        <p>Years Of <br /> Experience</p>
                    </div>
                    <div className='text-[#ffffffe5] flex items-center justify-center gap-2'>
                        <h4 className='text-5xl font-bold '>
                            06+
                        </h4>
                        <p>Project <br /> Completed</p>
                    </div>
                    <div className='text-[#ffffffe5] flex items-center justify-center gap-2'>
                        <h4 className='text-5xl font-bold '>
                            04+
                        </h4>
                        <p>Happy <br /> Clients</p>
                    </div>
                    <div className='text-[#ffffffe5] flex items-center justify-center gap-2'>
                        <h4 className='text-5xl font-bold '>
                            03+
                        </h4>
                        <p>Business <br /> Build</p>
                    </div>
                </div>






            </div>

        </div>
    )
}

export default Hero