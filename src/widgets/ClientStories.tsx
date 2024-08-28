import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'; // Ensure correct imports
import { useState } from 'react'; // For managing the active index

const ClientsStories = () => {
  const testimonials = [
    {
      id: 1,
      company: "COSMIC SPORTS",
      image: "/path/to/image1.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Brandon Fraser",
      position: "Senior Software Dev, Cosmic Sport",
    },
    {
      id: 2,
      company: "COMPANY",
      image: "/path/to/image2.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Tim Bailey",
      position: "SEO Specialist, Theme Junction",
    },
    {
      id: 3,
      company: "COSMIC SPORTS",
      image: "/path/to/image1.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Brandon Fraser",
      position: "Senior Software Dev, Cosmic Sport",
    },
    {
      id: 4,
      company: "COMPANY",
      image: "/path/to/image2.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Tim Bailey",
      position: "SEO Specialist, Theme Junction",
    },
    {
      id: 5,
      company: "COSMIC SPORTS",
      image: "/path/to/image1.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Brandon Fraser",
      position: "Senior Software Dev, Cosmic Sport",
    },
    {
      id: 6,
      company: "COMPANY",
      image: "/path/to/image2.jpg",
      feedback: "Taylor is a professional Designer he really helps my business by providing value to my business.",
      name: "Tim Bailey",
      position: "SEO Specialist, Theme Junction",
    },
    // Add more testimonials as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-500 mb-4">My Client's Stories</h2>
        <p className="mb-8">Empowering people in a new digital journey with my super services</p>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='md:flex hidden'>

          </div>
          <div className='md:col-span-2'>

        <Carousel >
          <CarouselContent className=''>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2  p-4"> {/* basis-1/2 for two items per slide */}
                <div className="bg-purple-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="mb-4">{testimonial.feedback}</p>
                  <div className="text-xs uppercase">{testimonial.company}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>


        </div>
        
        
      </div>
    </div>
  );
};

export default ClientsStories;
