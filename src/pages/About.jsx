import { motion } from 'framer-motion';
import { FaAward, FaUserMd, FaHospital, FaHandHoldingMedical } from 'react-icons/fa';
import Footer from '../components/Footer';
import StatsCard from '../components/StatsCard';
import Timeline from '../components/Timeline';

const stats = [
  { icon: FaAward, value: '25+', label: 'Years of Excellence' },
  { icon: FaUserMd, value: '50+', label: 'Expert Doctors' },
  { icon: FaHospital, value: '3', label: 'Modern Facilities' },
  { icon: FaHandHoldingMedical, value: '10k+', label: 'Patients Served' }
];

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <motion.div 
            className="about__hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Our Story</h1>
            <p>Leading the way in medical excellence</p>
          </motion.div>

          <div className="about__content">
            <motion.div
              className="text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Leading Healthcare Provider</h2>
              <p>
                Founded in 1995, HealthCare has been at the forefront of medical excellence for over 25 years. Our commitment to providing exceptional healthcare services has made us one of the most trusted medical institutions in the region.
              </p>
              <p>
                We believe in a patient-first approach, combining cutting-edge technology with compassionate care to ensure the best possible outcomes for our patients.
              </p>
            </motion.div>
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                alt="Hospital Building"
              />
            </motion.div>
          </div>

          <div className="about__stats">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="about__timeline">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            <Timeline />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}