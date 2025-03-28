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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
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
