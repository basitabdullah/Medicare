import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import { services } from '../assets/Servicesdata';


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