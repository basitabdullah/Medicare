import { motion } from "framer-motion";
import styles from "../styles/Diagnostics.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";

const diagnosticServices = [
  {
    title: "Full Body Checkup",
    description:
      "Comprehensive health screening with detailed analysis of all major body systems.",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=500",
    category: "Premium",
    features: [
      "Complete Blood Count",
      "Liver Function Test",
      "Kidney Function Test",
      "Cardiac Risk Assessment",
    ],
    price: "299",
  },
  {
    title: "Advanced Imaging",
    description:
      "State-of-the-art imaging services using the latest technology for accurate diagnosis.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500",
    category: "Specialized",
    features: ["MRI Scan", "3D CT Scan", "Ultrasound", "X-Ray Services"],
    price: "399",
  },
  {
    title: "Cardiac Screening",
    description:
      "Comprehensive heart health assessment with advanced diagnostic tools.",
    image:
      "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=500",
    category: "Essential",
    features: ["ECG", "Echo Cardiogram", "Stress Test", "Lipid Profile"],
    price: "199",
  },
  {
    title: "Women's Health Package",
    description:
      "Specialized diagnostic services focused on women's health and wellness.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500",
    category: "Specialized",
    features: [
      "Mammography",
      "Bone Density Scan",
      "Gynecological Exam",
      "Hormone Analysis",
    ],
    price: "249",
  },
];

function Diagnostics() {
  return (
    <>
      <section className={styles.diagnostics}>
        <div className="container">
          <div className={styles.header}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Diagnostic Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Advanced diagnostic solutions with state-of-the-art technology and
              expert analysis
            </motion.p>
          </div>

          <div className={styles.grid}>
            {diagnosticServices.map((service, index) => (
              <DiagnosticCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  function DiagnosticCard({
    title,
    description,
    image,
    features,
    price,
    category,
  }) {
    return (
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.image}>
          <img src={image} alt={title} />
          {category && <span className={styles.badge}>{category}</span>}
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaCheckCircle size={16} />
                {feature}
              </motion.li>
            ))}
          </ul>
          
        </div>
      </motion.div>
    );
  }
}
export default Diagnostics;
