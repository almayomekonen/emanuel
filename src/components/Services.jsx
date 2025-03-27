// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "🚗",
      title: "ביטוח רכב",
      description: "השוואת מחירים מכל החברות עם הכיסוי האופטימלי עבורך",
      color: "#4361ee",
    },
    {
      icon: "🏠",
      title: "ביטוח בית",
      description: "הגנה מקיפה על הבית והיקר לך מכל סיכון אפשרי",
      color: "#3a0ca3",
    },
    {
      icon: "🏥",
      title: "ביטוח בריאות",
      description: "כיסויים רפואיים מותאמים לצרכים האישיים שלך",
      color: "#4895ef",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "ביטוח חיים",
      description: "הגנה על יקיריך עם פוליסה גמישה וחכמה",
      color: "#4cc9f0",
    },
    {
      icon: "🏢",
      title: "ביטוח עסקי",
      description: "פתרונות ביטוח מקיפים לעסקים קטנים וגדולים",
      color: "#560bad",
    },
    {
      icon: "🌎",
      title: "ביטוח נסיעות",
      description: "כיסוי מלא לטיולים בארץ ובחו״ל עם תמיכה 24/7",
      color: "#7209b7",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="services" id="שירותים" ref={ref}>
      <div className="services-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>השירותים שלי</h2>
          <p>מגוון פתרונות ביטוח מותאמים אישית לכל צורך</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                background: `linear-gradient(135deg, white 0%, rgba(255, 255, 255, 0.9) 100%)`,
                border: `2px solid ${service.color}`,
              }}
            >
              <div
                className="service-icon-container"
                style={{ backgroundColor: service.color }}
              >
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button
                className="service-button"
                style={{ color: service.color, borderColor: service.color }}
                whileHover={{
                  backgroundColor: service.color,
                  color: "white",
                }}
              >
                קרא עוד
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
