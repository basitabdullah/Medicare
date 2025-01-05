import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import Map from "../components/Map";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import data from data files
import { services } from "../assets/Servicesdata";
import { doctors } from "../assets/Doctorsdata";

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const navigate = useNavigate();

  return (
    <div ref={scrollRef} className="overflow-x-hidden">
      <section className="hero relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0 opacity-50"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div
          className="absolute top-20 right-10 w-20 h-20 rounded-full bg-blue-500/20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          <h1>Modern Healthcare for Everyone</h1>
          <p>
            Experience world-class medical care with cutting-edge technology and
            compassionate professionals
          </p>
        </motion.div>
      </section>

      <section className="services relative">
        <motion.div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(230,244,255,0.5) 100%)",
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          }}
        />

        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            Our Services
          </motion.h2>
          <div className="services__grid">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <button
            className="see-more-button"
            onClick={() => navigate("/services")}
          >
            See More Services
          </button>
        </div>
      </section>

      <section className="doctors relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(45deg, rgba(66,153,225,0.1) 0%, rgba(129,230,217,0.1) 100%)",
            opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
          }}
        />

        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            Meet Our Doctors
          </motion.h2>
          <div className="doctors__grid">
            {doctors.slice(0, 6).map((doctor) => (
              <DoctorCard key={doctor.name} {...doctor} />
            ))}
          </div>
          <button
            className="see-more-button"
            onClick={() => navigate("/doctors")}
          >
            See More Doctors
          </button>
        </div>
      </section>

      <Map />
      <Footer />
    </div>
  );
}
