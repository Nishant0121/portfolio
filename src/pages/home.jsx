/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ContactInfoCard from "../components/contact";
import csi from "../assets/csi_tsec_logo.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  // Animation Variants for framer-motion
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, duration: 1 },
    },
  };

  return (
    <motion.div
      className="flex-col p-2 md:p-4 w-full bg-transperent shadow-lg rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br text-white from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Nishant Patil
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-xl"
      >
        Aspiring Engineer | B.E. Student at Thadomal Shahani Engineering College
        | Passionate About Innovation, Technology, and Problem-Solving
      </motion.p>

      {/* Location and Contact */}
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-xl"
      >
        <p className="text-gray-500 mr-4">Mumbai, Maharashtra, India</p>
        <button
          className="text-blue-600 underline hover:text-blue-800 transition"
          onClick={() => document.getElementById("contact_modal").showModal()}
        >
          Contact
        </button>
      </motion.div>

      <div className="my-6 border-b border-gray-300"></div>

      {/* About Section */}
      <motion.div className="flex flex-col" variants={itemVariant}>
        <span className="text-xl font-semibold mb-3">About</span>
        <span className="mb-3 w-fit border-b-2 border-blue-600 text-xl">
          🌟 Web Developer | Aspiring Tech Professional 🌟
        </span>
        <p className="text-gray-400 mb-4">
          I'm Nishant Patil, a passionate and dedicated Web Developer with
          hands-on experience in building dynamic and user-centric web
          applications. With a strong foundation in front-end technologies, I
          specialize in creating seamless and efficient web experiences.
        </p>
      </motion.div>

      <div className="my-6 border-b border-gray-300"></div>

      {/* Experience Section */}
      <motion.div className="flex flex-col" variants={itemVariant}>
        <span className="text-xl font-semibold mb-3">Experience</span>
        <Link
          to={"https://www.linkedin.com/company/csi-tsec/"}
          className="mb-3 w-fit"
        >
          <motion.div
            className="flex items-center gap-3 hover:bg-gray-900 p-3 rounded-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={csi}
              className="h-12 w-12 object-cover rounded-full shadow-lg"
              alt="CSI TSEC"
            />
            <div>
              <h3 className="font-semibold">Technical Team Member</h3>
              <h3>CSI-TSEC (Computer Society of India)</h3>
              <h3 className="text-gray-500">Apr 2024 - Present · 5 mos</h3>
            </div>
          </motion.div>
          <h3 className="text-gray-500">Bandra, Maharashtra, India</h3>
        </Link>
      </motion.div>

      <div className="my-6 border-b border-gray-300"></div>

      {/* Languages Section */}
      <motion.div className="flex flex-col" variants={itemVariant}>
        <span className="text-xl font-semibold mb-3">Languages</span>
        <span className="mb-3 w-fit border-b-2 border-blue-600">English</span>
        <p className="text-gray-400">Professional working proficiency</p>
      </motion.div>

      {/* Contact Modal */}
      <dialog id="contact_modal" className="modal">
        <motion.div
          className="modal-box w-fit p-3 overflow-y-auto max-h-[80vh] rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <ContactInfoCard />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </motion.div>
      </dialog>
    </motion.div>
  );
}
