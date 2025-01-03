import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import Map from '../components/Map';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Emergency Care',
    description: '24/7 emergency services with state-of-the-art facilities.',
    features: [
      'Round-the-clock emergency response',
      'Advanced life support ambulances',
      'Trauma care center',
      'Critical care specialists'
    ]
  },
  {
    title: 'Telemedicine',
    description: 'Virtual consultations from the comfort of your home.',
    features: [
      'Video consultations',
      'Digital prescriptions',
      'Remote monitoring',
      'Secure patient portal'
    ]
  },
  {
    title: 'Specialized Care',
    description: 'Advanced treatments across multiple specialties.',
    features: [
      'Cardiology',
      'Neurology',
      'Orthopedics',
      'Oncology'
    ]
  }
];

const featuredDoctors = [
  {
    name: 'Dr. Syed Maqbool',
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
  }
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>Modern Healthcare for Everyone</h1>
          <p>Experience world-class medical care with cutting-edge technology and compassionate professionals</p>
        </motion.div>
      </section>

      <section className="services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="services__grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="doctors">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Doctors
          </motion.h2>
          <div className="doctors__grid">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      <Map />
      <Footer />
    </div>
  );
}