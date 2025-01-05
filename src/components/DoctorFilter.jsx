import { motion } from 'framer-motion';

export default function DoctorFilter({ specialties, selectedSpecialty, onSpecialtyChange }) {
  return (
    <div className="doctor-filter">
      <h3>Categories</h3>
      <motion.button
        className={`filter-btn ${selectedSpecialty === 'all' ? 'active' : ''}`}
        onClick={() => onSpecialtyChange('all')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Specialties
      </motion.button>
      {specialties.map((specialty) => (
        <motion.button
          key={specialty}
          className={`filter-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
          onClick={() => onSpecialtyChange(specialty)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {specialty}
        </motion.button>
      ))}
    </div>
  );
}