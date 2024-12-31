import { motion } from 'framer-motion';
import { FaHospital, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';

const milestones = [
  {
    year: '1995',
    title: 'Foundation',
    description: 'Established with a vision to provide exceptional healthcare',
    icon: FaHospital
  },
  {
    year: '2005',
    title: 'Excellence Award',
    description: 'Recognized for outstanding patient care and service',
    icon: FaAward
  },
  {
    year: '2015',
    title: 'Major Expansion',
    description: 'Opened new facilities and expanded our services',
    icon: FaUsers
  },
  {
    year: '2020',
    title: 'Global Recognition',
    description: 'Achieved international accreditation for medical excellence',
    icon: FaGlobe
  }
];

export default function Timeline() {
  return (
    <div className="timeline">
      {milestones.map((milestone, index) => (
        <motion.div
          key={milestone.year}
          className="timeline__item"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="timeline__content">
            <div className="icon-wrapper">
              <milestone.icon size={24} />
            </div>
            <div className="year">{milestone.year}</div>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}