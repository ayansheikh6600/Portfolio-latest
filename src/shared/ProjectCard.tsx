// components/Card.tsx
import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, description, imageUrl, category }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <Image width={1200} height={1200} src={""} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
