// components/Card.tsx
import { delay, motion } from "framer-motion";
import Image from 'next/image';
import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  liveUrl?:string;
  repoUrl?:string
  vedioUrl?:string
}

const ProjectCard: React.FC<CardProps> = ({ title, description, imageUrl, category, liveUrl, repoUrl, vedioUrl }) => {

  const [isShow, setShow] = useState(false)
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
      <img width={1200} height={1200} src={`${imageUrl}`} alt={title} className="w-full h-[300px] object-cover" />
      {isShow ? <motion.div
  animate={{
    x: 0,
    y: -31,
    scale: 1,
    rotate: 0,
    
  }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  
  
  className="p-4 absolute -bottom-9  bg-gradient-to-r from-primary to-[#1e064b]  w-full " onMouseEnter={() => setShow(true)}  >

        <div className='text-start'>
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className='text-end flex gap-4 items-center justify-end'>
        <a href={liveUrl||"#"} target='_blank' className="text-sm text-gray-500 hover:text-primary cursor-pointer">Live Link</a>
        <a href={repoUrl||"#"} target='_blank' className="text-sm text-gray-500 hover:text-primary cursor-pointer">Repo Link</a>

        </div>

        <span className="text-sm text-gray-500">{category}</span>
      </motion.div> : ""}
    </div>
  );
};

export default ProjectCard;
