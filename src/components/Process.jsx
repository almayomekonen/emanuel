// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "פגישת ייעוץ",
      description: "מפגש אישי להבנת הצרכים והמטרות שלך",
      icon: "💬",
    },
    {
      title: "ניתוח מצב קיים",
      description: "בדיקת הפוליסות הקיימות שלך וזיהוי פערים",
      icon: "🔍",
    },
    {
      title: "בחירת פוליסה",
      description: "השוואת חברות ומציאת הפתרון המושלם עבורך",
      icon: "📊",
    },
    {
      title: "ליווי ותמיכה",
      description: "תמיכה מלאה בכל שלבי הפוליסה ובמקרה של תביעה",
      icon: "🤝",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="process" id="תהליך העבודה" ref={ref}>
      <div className="process-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>איך אני עובד?</h2>
          <p>תהליך עבודה מובנה ויעיל להשגת התוצאות הטובות ביותר</p>
        </motion.div>

        <motion.div
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              variants={itemVariants}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>מוכן להתחיל?</h3>
          <motion.button
            className="cta-button primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(67, 97, 238, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            קבע פגישת ייעוץ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
