import { motion } from "motion/react";
import JobCard from "./JobCard";

export default function JobList({ jobs, candidate }) {
  // Animación escalonada para que las tarjetas aparezcan en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      style={styles.gridContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} candidate={candidate} />
      ))}
    </motion.div>
  );
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "1.5rem",
    width: "100%",
  },
};
