import ContactForm from "@/Forms/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
    return (
        <div className="sm:container mx-auto p-2 flex flex-col lg:flex-row justify-between items-center   ">
            <ContactForm />
            <div className="mt-8 lg:mt-0 lg:ml-16">

                <div className="text-white space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-800 p-4 rounded-full">
                            {/* Phone Icon */}
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <p className="font-bold">Phone</p>
                            <p>+92 3198187639</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-800 p-4 rounded-full">
                            {/* Email Icon */}
                            <MdEmail />
                        </div>
                        <div>
                            <p className="font-bold">Email</p>
                            <a href="mailto:ayansheikh6600@gmail.com">ayansheikh6600@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-800 p-4 rounded-full">
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
    );
};

export default ContactSection;
