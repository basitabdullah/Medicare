import { motion } from "framer-motion";
import styles from "../styles/Diagnostics.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";
import { diagnosticServices } from "../assets/DiagnosticsData";


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
