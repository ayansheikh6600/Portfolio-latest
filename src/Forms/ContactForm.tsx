"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const gradientColors = {
  default: ['#8750f7', '#0f0715'],
  hover: ['#0f0715', '#8750f7']
};

const ContactForm = () => {


    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  
    const handleChange = (e:any) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      alert('Error sending message');
    }
  };



  return (
    <div className="bg-[#2c095a3f] p-8 rounded-lg shadow-md max-w-lg">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-[#ffffffe5] bg-clip-text text-transparent mb-4">
      Let’s work together!
    </h2>
    <p className="text-white mb-6">
      I design and code beautifully simple things and I love what I do. Just simple like that!
    </p>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
        />
      </div>
      <div className="flex gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
        />
      </div>
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
      >
        <option value="" disabled>
          Choose Service
        </option>
        <option value="Service 1">Service 1</option>
        <option value="Service 2">Service 2</option>
        <option value="Service 3">Service 3</option>
      </select>
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
      ></textarea>
      <motion.button
        type="submit"
        className="bg-gradient-to-r p-4 rounded-xl text-white"
        initial={{
          backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})`,
        }}
        whileHover={{
          backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})`,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        Send Message
      </motion.button>
    </form>
  </div>
  );
};


export default ContactForm