import { motion } from 'framer-motion';

export default function StatsCard({ icon: Icon, value, label }) {
  return (
    <motion.div
      className="stats-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="icon-wrapper">
        <Icon size={32} />
      </div>
      <h3>{value}</h3>
      <p>{label}</p>
    </motion.div>
  );
}