"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/shared/ProjectCard';

interface DataItem {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const data: DataItem[] = [
  {
    title: 'Deloitte',
    description: 'How Deloitte found freedom, flexibility, and rebrand success in the switch to Dstudio',
    imageUrl: 'https://iblossomlearn.org/',
    category: 'UX/UI',
  },
  {
    title: 'Grow Your Business',
    description: 'We don’t only design beautiful experiences, also make sure your business grow.',
    imageUrl: '/images/image-2.jpg',
    category: 'Branding',
  },
  {
    title: 'Sebastian Camargo',
    description: 'A brand, strong identity, and typography design.',
    imageUrl: '/images/image-3.jpg',
    category: 'Apps',
  },
  {
    title: 'Bigger, Bolder and Better',
    description: 'We’ve been Polished, specialized with the space & create to make remarkable over time.',
    imageUrl: '/images/image-4.jpg',
    category: 'Branding',
  },
];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = ['All', 'UX/UI', 'Branding', 'Apps'];

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div className='sm:container py-[30px]'>
      <div className="text-center">
        <div className='flex justify-center items-center'>
          <div className="relative flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8 bg-black rounded-full w-fit">
            {categories.map((category) => (
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
          {filteredData?.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
