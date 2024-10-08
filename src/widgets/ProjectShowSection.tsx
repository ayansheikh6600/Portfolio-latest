"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/shared/ProjectCard';
import axios from 'axios';

interface DataItem {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

// const data: DataItem[] = [
//   {
//     title: 'Deloitte',
//     description: 'How Deloitte found freedom, flexibility, and rebrand success in the switch to Dstudio',
//     imageUrl: 'https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     category: 'UX/UI',
//   },
//   {
//     title: 'Grow Your Business',
//     description: 'We don’t only design beautiful experiences, also make sure your business grow.',
//     imageUrl: 'https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     category: 'Branding',
//   },
//   {
//     title: 'Sebastian Camargo',
//     description: 'A brand, strong identity, and typography design.',
//     imageUrl: 'https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     category: 'Apps',
//   },
//   {
//     title: 'Bigger, Bolder and Better',
//     description: 'We’ve been Polished, specialized with the space & create to make remarkable over time.',
//     imageUrl: 'https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     category: 'Branding',
//   },
// ];

const ProjectSection = () => {

  const [data, setData]:any= useState([])

  useEffect(()=>{

(async()=>{

const res = await axios.get("/api/add-project")

console.log(res?.data?.data);

setData(res?.data?.data)


})()

  },[])


  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories:any = ['All', 'Website', 'Branding', 'App'];

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter((item:any)=> item.category === selectedCategory);

  return (
    <div className='sm:container py-[30px]'>
      <div className="text-center">
        <div className='flex justify-center items-center'>
          <div className="relative flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8 bg-black rounded-full w-fit">
            {categories.map((category:any) => (
              <div key={category} className="relative">
                <button
                  onClick={() => setSelectedCategory(category)}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`relative z-10 py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {category}
                </button>

                {selectedCategory === category && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-[#1e064b] rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:p-0 px-3 sm:gap-6">
          {filteredData?.map((item:any, index:any) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item?.resource?.secure_url}
              category={item.category}
              liveUrl={item.liveUrl}
              repoUrl={item.repoUrl}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
