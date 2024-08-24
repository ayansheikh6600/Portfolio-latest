import React from 'react';

interface ExperienceEducationItem {
  yearRange: string;
  title: string;
  subtitle: string;
}

const experience :ExperienceEducationItem[] = [
  {
    yearRange: '2023 – Present',
    title: 'Generative AI & Metaverse',
    subtitle: 'Learning Generative AI & Metaverse At Governor-House Karachi',
  },
    {
      yearRange: '2022 – 2023',
      title: 'MERN Stack Development',
      subtitle: 'Mern Stack Course At SMIT (Saylani Mass IT Training)',
    },
    {
      yearRange: '2022 - 2024',
      title: 'Intermediate',
      subtitle: 'Intermediate in Engineering',
    },
    {
      yearRange: '2020 – 2022',
      title: 'Matriculation',
      subtitle: 'Computer Science',
    },
    
  ];

  const education :ExperienceEducationItem[] = [
    {
      yearRange: '2020 – 2022',
      title: 'Programming Course',
      subtitle: 'Harvard University',
    },
    {
      yearRange: '2016 – 2020',
      title: 'Graphic Design Course',
      subtitle: 'University of Denmark',
    },
    {
      yearRange: '2012 – 2015',
      title: 'Web Design Course',
      subtitle: 'University of California',
    },
    {
      yearRange: '2010 – 2011',
      title: 'Design & Technology',
      subtitle: 'Parsons, The New School',
    },
  ];

const EducationSection = () => {
  return (
    <div className="sm:container py-10">
      <div className="grid grid-cols-1 ">
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 flex items-center">
            <span className="mr-2">👨‍💻</span> My Education
          </h2>
          <div className="mt-4 space-y-4">
            {experience.map((item, index) => (
              <div
              key={index}
              className={`p-4 rounded-lg bg-[#5e34b191] 
                transition-all duration-1000 ease-in-out
                hover:bg-gradient-to-r hover:from-primary hover:to-[#1e064b]
                hover:delay-700
              `}
            >
              <p className="text-purple-300 font-semibold">{item.yearRange}</p>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.subtitle}</p>
            </div>
            
            ))}
          </div>
        </div>

        {/* Education Section */}
        {/* <div>
          <h2 className="text-2xl font-bold text-purple-400 flex items-center">
            <span className="mr-2">🎓</span> My Education
          </h2>
          <div className="mt-4 space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${index === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-800' : 'bg-gray-800'}`}
              >
                <p className="text-purple-300 font-semibold">{item.yearRange}</p>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EducationSection;
