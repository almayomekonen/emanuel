import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "car",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const interestLabels = {
    car: "ביטוח רכב",
    home: "ביטוח בית",
    health: "ביטוח בריאות",
    life: "ביטוח חיים",
    business: "ביטוח עסקי",
    travel: "ביטוח נסיעות",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // כאן תוסיף לוגיקה לשליחת הטופס
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "car",
        message: "",
      });
    }, 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="contact" id="צור קשר" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>צור קשר</h2>
          <p>מלא את הפרטים ואחזור אליך בהקדם עם הצעה מותאמת אישית</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card">
              <h3>בואו נדבר</h3>
              <p>
                אשמח לענות על כל שאלה ולעזור לך למצוא את הביטוח המושלם עבורך
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <div className="method-details">
                    <h4>טלפון</h4>
                    <p>050-1234567</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-details">
                    <h4>אימייל</h4>
                    <p>emanuel@insurance.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h4>כתובת</h4>
                    <p>רחוב הביטוח 123, תל אביב</p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h4>עקבו אחריי ברשתות החברתיות</h4>
                <div className="social-icons">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="name">שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="הכנס את שמך המלא"
                  />
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="phone">טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="הכנס את מספר הטלפון שלך"
                  />
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="email">אימייל</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="הכנס את כתובת האימייל שלך"
                  />
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label>מה מעניין אותך?</label>
                  <div className="interest-options">
                    {Object.entries(interestLabels).map(([key, value]) => (
                      <motion.label
                        key={key}
                        className={`interest-option ${
                          formData.interest === key ? "active" : ""
                        }`}
                        whileHover={{
                          scale: 1.02,
                          boxShadow:
                            formData.interest !== key
                              ? "0 5px 15px rgba(0, 0, 0, 0.1)"
                              : "none",
                        }}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={key}
                          checked={formData.interest === key}
                          onChange={handleChange}
                        />
                        <span className="interest-icon">
                          {key === "car" && "🚗"}
                          {key === "home" && "🏠"}
                          {key === "health" && "🏥"}
                          {key === "life" && "👨‍👩‍👧‍👦"}
                          {key === "business" && "🏢"}
                          {key === "travel" && "🌎"}
                        </span>
                        <span className="interest-text">{value}</span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="message">הודעה (אופציונלי)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="כתוב כאן הודעה או שאלה"
                    rows="3"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(67, 97, 238, 0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  variants={itemVariants}
                >
                  שלח וקבל הצעה
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✓</div>
                <h3>תודה {formData.name}!</h3>
                <p>פנייתך התקבלה בהצלחה. אחזור אליך בהקדם.</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="contact-advantages"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="advantage-tag">
            <div className="advantage-icon">💯</div>
            <p>שירות אישי ומותאם</p>
          </div>
          <div className="advantage-tag">
            <div className="advantage-icon">⏱️</div>
            <p>זמינות 24/7</p>
          </div>
          <div className="advantage-tag">
            <div className="advantage-icon">💰</div>
            <p>חיסכון של אלפי שקלים</p>
          </div>
          <div className="advantage-tag">
            <div className="advantage-icon">🔒</div>
            <p>ליווי בתביעות</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
