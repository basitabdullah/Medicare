import { motion } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
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
    ]
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
    ]
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
    ]
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    expertise: [
      'Joint Replacement',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Care'
    ]
  }
];

export default function Doctors() {
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
          <div className="doctors__grid">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}