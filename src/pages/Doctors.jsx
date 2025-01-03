import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import DoctorFilter from '../components/DoctorFilter';
import Footer from '../components/Footer';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    expertise: [
      'Interventional Cardiology',
      'Heart Failure Management',
      'Cardiac Rehabilitation',
      'Preventive Cardiology'
    ],
    timings: 'Mon-Fri: 9AM-5PM'
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
    expertise: [
      'Movement Disorders',
      'Epilepsy Treatment',
      'Stroke Management',
      'Neuromuscular Disease'
    ],
    timings: 'Mon-Thu: 10AM-6PM'
  },
  {
    name: 'Dr. Emily Williams',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300',
    expertise: [
      'Newborn Care',
      'Developmental Pediatrics',
      'Childhood Immunizations',
      'Behavioral Health'
    ],
    timings: 'Mon-Sat: 8AM-4PM'
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    expertise: [
      'Joint Replacement',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Care'
    ],
    timings: 'Tue-Sat: 9AM-5PM'
  }
];

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
          
          <DoctorFilter
            specialties={specialties}
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
          />
          
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
      </section>
      <Footer />
    </>
  );
}