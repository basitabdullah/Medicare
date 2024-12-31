import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHospital, FaVideo, FaUserMd, FaList, FaChevronDown } from 'react-icons/fa';
import Button from './Button';

const icons = {
  'Emergency Care': FaHospital,
  'Telemedicine': FaVideo,
  'Specialized Care': FaUserMd
};

export default function ServiceCard({ title, description, features }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = icons[title] || FaUserMd;

  return (
    <motion.div
      className="services__card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="services__card-header">
        <Icon size={24} color="#2563eb" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      
      <Button 
        variant="outline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
        <FaChevronDown
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease'
          }}
        />
      </Button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="services__card-details"
          >
            <h4>Key Features:</h4>
            <ul>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaList size={12} style={{ marginRight: '8px' }} />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}