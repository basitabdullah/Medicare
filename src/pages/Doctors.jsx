import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import DoctorFilter from '../components/DoctorFilter';
import Footer from '../components/Footer';
import {doctors} from '../assets/Doctorsdata';


export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  const filteredDoctors = selectedSpecialty === 'all'
    ? doctors
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  return (
    <>
      <section className="doctors">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Medical Team
          </motion.h2>
          
          <div className="doctors__layout">
            <aside className="doctors__sidebar">
              <DoctorFilter
                specialties={specialties}
                selectedSpecialty={selectedSpecialty}
                onSpecialtyChange={setSelectedSpecialty}
              />
            </aside>
            
            <div className="doctors__content">
              <div className="doctors__grid">
                <AnimatePresence mode="wait">
                  {filteredDoctors.map((doctor) => (
                    <motion.div
                      key={doctor.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DoctorCard {...doctor} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}