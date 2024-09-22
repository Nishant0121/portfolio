import projectsData from "../assets/projects.json";
import { ThreeDCardDemo } from "../components/card";
import { motion } from "framer-motion"; // Import framer-motion

export default function Projects() {
  // Define animation variants for fade-in with upward motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projectsData.projects.map((project, index) => (
        <motion.div key={index} variants={cardVariants}>
          <ThreeDCardDemo {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
