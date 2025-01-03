import { motion } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import Footer from '../components/Footer';
import { doctors } from '../assets/Doctorsdata';



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