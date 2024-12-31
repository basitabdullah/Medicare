import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services with state-of-the-art facilities.',
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
    description: 'Advanced specialized medical treatments across various disciplines.',
    features: [
      'Cardiology',
      'Neurology',
      'Orthopedics',
      'Oncology'
    ]
  },
  {
    title: 'Laboratory Services',
    description: 'Comprehensive diagnostic testing and analysis.',
    features: [
      'Advanced diagnostics',
      'Quick result delivery',
      'Home sample collection',
      'Online reports access'
    ]
  },
  {
    title: 'Rehabilitation',
    description: 'Complete rehabilitation services for optimal recovery.',
    features: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Sports rehabilitation'
    ]
  },
  {
    title: 'Mental Health',
    description: 'Professional mental health services and counseling.',
    features: [
      'Individual therapy',
      'Group counseling',
      'Psychiatric care',
      'Stress management'
    ]
  }
];

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
      <Footer />
    </>
  );
}