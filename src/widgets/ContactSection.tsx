import ContactForm from "@/Forms/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <div className="sm:container mx-auto py-[30px] ">


            <h2 className="text-center text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-[#ffffffe5] bg-clip-text text-transparent">
                Contact Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex-row justify-center items-center">

                <div className="flex justify-center md:justify-normal items-center" data-aos="fade-right">


                <ContactForm />
                </div>

                <div className="mt-8 lg:mt-0 lg:ml-16 flex justify-center" data-aos="fade-left">

                    <div className="text-white space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-b from-primary to-primary-dark  p-4 rounded-full">
                                {/* Phone Icon */}
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="font-bold">Phone</p>
                                <p>+92 3198187639</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-b from-primary  p-4 rounded-full">
                                {/* Email Icon */}
                                <MdEmail />
                            </div>
                            <div>
                                <p className="font-bold">Email</p>
                                <a href="mailto:ayansheikh6600@gmail.com">ayansheikh6600@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-b from-primary  p-4 rounded-full">
                                <IoLocationOutline />
                            </div>
                            <div>
                                <p className="font-bold">Address</p>
                                <p>Nazimabad No:2 Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactSection;
