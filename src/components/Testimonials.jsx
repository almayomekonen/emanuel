import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const testimonials = [
    {
      text: "עמנואל הציל אותי ממש! מצא לי פוליסה מעולה ב-40% פחות ממה ששילמתי קודם. הוא תמיד זמין לשאלות ונותן שירות מעולה.",
      name: "דניאל כהן",
      position: "לקוח פרטי",
      avatar: "/avatar1.jpg",
      rating: 5,
    },
    {
      text: "מקצועיות ושירות מעולים. עמנואל עזר לי להבין בדיוק מה אני קונה ולא שילמתי על כיסויים מיותרים. ממליץ בחום!",
      name: "שרה לוי",
      position: "עצמאית",
      avatar: "/avatar2.jpg",
      rating: 5,
    },
    {
      text: "אחרי תאונה קיבלתי ליווי צמוד בכל תהליך התביעה. עמנואל פשוט סוכן ביטוח מהשורה הראשונה! לא יכולתי לבקש ליווי טוב יותר.",
      name: "מיכאל אברמוב",
      position: "לקוח פרטי",
      avatar: "/avatar3.jpg",
      rating: 5,
    },
    {
      text: "עמנואל הוא מקצוען אמיתי. הוא הבין את הצרכים שלי והתאים לי את הפוליסה המושלמת. אני סומכת עליו בעיניים עצומות.",
      name: "רונית לביא",
      position: "מנהלת חברה",
      avatar: "/avatar4.jpg",
      rating: 5,
    },
  ];

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused && inView) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, testimonials.length, inView]);

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <section className="testimonials" id="המלצות" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>מה הלקוחות אומרים</h2>
          <p>אלפי לקוחות מרוצים כבר בחרו בי, וזה מה שיש להם לומר</p>
        </motion.div>

        <div
          className="testimonial-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="quote-icon">❝</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="testimonial"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p>{testimonials[activeTestimonial].text}</p>
              <div className="stars">
                {[...Array(testimonials[activeTestimonial].rating)].map(
                  (_, i) => (
                    <motion.span
                      key={i}
                      className="star"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      ★
                    </motion.span>
                  )
                )}
              </div>
              <div className="client-info">
                <div className="client-avatar">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                  />
                </div>
                <div className="client-details">
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <span>{testimonials[activeTestimonial].position}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-navigation">
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`dot ${
                    index === activeTestimonial ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
            <div className="testimonial-arrows">
              <motion.button
                className="arrow prev"
                onClick={() => {
                  setActiveTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  );
                  setPaused(true);
                  setTimeout(() => setPaused(false), 5000);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#10094;
              </motion.button>
              <motion.button
                className="arrow next"
                onClick={() => {
                  setActiveTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  );
                  setPaused(true);
                  setTimeout(() => setPaused(false), 5000);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &#10095;
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
