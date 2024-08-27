// components/LoadingScreen.tsx
import { useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion"

const LoadingScreen = () => {

  const letterVariants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    animate: {
      y: [-10, 0], // Bouncing effect
      opacity: [0, 1], // Fading effect
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }


  return (


    <div className='w-100 h-[100vh] '>
      <motion.div
        animate={{
          x: 0,
          y: -1992,
          scale: 1,
          rotate: 0,
          animationDelay: "4",
        }
        }

        style={
          {

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",


            // overflow:"hidden"
          }
        }
        transition={{
          delay: 2,
          duration: 1.5, // Increase duration for a slower animation
          ease: 'easeInOut'
        }}
      >
        <div
          className={`fixed inset-0 flex items-center justify-center custom-radial-gradient from-gradient-start to-gradient-end   transition-transform duration-700 ease-in-out
        
      `}
        >
          <div className='flex space-x-1'>
            {Array.from("LOADING...").map((letter, index) => (
              <motion.span
                key={index}
                className='text-white text-2xl font-bold'
                variants={letterVariants as any}
                initial="initial"
                animate="animate"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

  );
};

export default LoadingScreen;
