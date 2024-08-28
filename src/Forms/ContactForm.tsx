const ContactForm = () => {
    return (
      <div className="bg-purple-900 p-8 rounded-lg shadow-md max-w-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
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
              className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none"
            />
          </div>
          <select className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none">
            <option>Choose Service</option>
            <option>Service 1</option>
            <option>Service 2</option>
          </select>
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-black/30 text-white rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-md text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  

  export default ContactForm