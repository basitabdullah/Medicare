import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaList, FaChevronDown } from "react-icons/fa";
import Button from "./Button";

export default function DoctorCard({
  name,
  specialty,
  image,
  expertise,
  timings = 'Mon-Fri 2:00pm to 4:00pm',
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="doctors__card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{specialty}</p>
        <div className="card-actions">
          <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Read More"}
            <FaChevronDown
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
            />
          </Button>
          <div className="timings">
            <FaClock />
            <span>{timings}</span>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && expertise && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="expertise"
            >
              <h4>Areas of Expertise:</h4>
              <ul>
                {expertise.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaList size={12} style={{ marginRight: "8px" }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
