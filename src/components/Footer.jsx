// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>עמנואל אינגדאו</h3>
            <p>סוכן ביטוח מורשה</p>
          </motion.div>

          <div className="footer-links">
            <motion.div
              className="footer-links-column"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>ניווט מהיר</h4>
              <ul>
                <li>
                  <a href="#ראשי">ראשי</a>
                </li>
                <li>
                  <a href="#שירותים">שירותים</a>
                </li>
                <li>
                  <a href="#תהליך העבודה">תהליך העבודה</a>
                </li>
                <li>
                  <a href="#המלצות">המלצות</a>
                </li>
                <li>
                  <a href="#צור קשר">צור קשר</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-links-column"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>סוגי ביטוח</h4>
              <ul>
                <li>
                  <a href="#">ביטוח רכב</a>
                </li>
                <li>
                  <a href="#">ביטוח דירה</a>
                </li>
                <li>
                  <a href="#">ביטוח בריאות</a>
                </li>
                <li>
                  <a href="#">ביטוח חיים</a>
                </li>
                <li>
                  <a href="#">ביטוח עסקי</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="footer-links-column"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4>צור קשר</h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📱</span>
                  <span>050-1234567</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <span>emanuel@insurance.com</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>רחוב הביטוח 123, תל אביב</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="footer-bottom">
          <motion.div
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </motion.div>

          <motion.div
            className="copyright"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p>
              © {new Date().getFullYear()} עמנואל אינגדאו. כל הזכויות שמורות.
              <br />
              <small>רישיון משרד האוצר מס' 12345</small>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
