import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Map() {
  return (
    <section className="map">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Find Us
        </motion.h2>
        <div className="map__content">
          <div className="map__info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h3>Address</h3>
                <p>123 Medical Center Dr<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>info@healthcare.com</p>
              </div>
            </div>
          </div>
          <div className="map__iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949922!2d-74.11976404950844!3d40.70583158557772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1695835687169!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}