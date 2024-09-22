import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const ContactInfoCard = () => {
  return (
    <div className="bg-gray-900 text-white w-fit p-3 rounded-lg font-sans">
      <h2 className="text-2xl mb-6">Nishant Patil</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <FaLinkedin className="mr-3 text-blue-500" />
          <a
            href="https://www.linkedin.com/in/nishant-patil-a88003253"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/nishant-patil-a88003253
          </a>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-3" />
          <span>9511692910 (Mobile)</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-3" />
          <a
            href="mailto:nishantpatil0121@gmail.com"
            className="hover:underline"
          >
            nishantpatil0121@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
