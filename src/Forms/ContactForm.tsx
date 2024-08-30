import { motion } from "framer-motion";

const gradientColors = {
  default: ['#8750f7', '#0f0715'],
  hover: ['#0f0715', '#8750f7']
};

const ContactForm = () => {
  return (
    <div className="bg-[#2c095a3f] p-8 rounded-lg shadow-md max-w-lg">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-[#ffffffe5] bg-clip-text text-transparent mb-4">
        Let’s work together!
      </h2>
      <p className="text-white mb-6">
        I design and code beautifully simple things and I love what I do. Just simple like that!
      </p>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
          />
        </div>
        <select className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none">
          <option>Choose Service</option>
          <option>Service 1</option>
          <option>Service 2</option>
        </select>
        <textarea
          placeholder="Message"
          className="w-full p-3 bg-black border border-gray-600 text-white rounded-md focus:outline-none"
        ></textarea>
        {/* <button
          type="submit"
          className="btn"
        >
          Send Message
        </button> */}
        <motion.button
          className="bg-gradient-to-r p-4 rounded-xl text-white"
          initial={{ backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})` }}
          whileHover={{ backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};


export default ContactForm