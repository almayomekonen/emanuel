// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("צור קשר");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("שירותים");
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="ראשי">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="gradient-text">ביטוח חכם</span>
            <br />
            <TypeAnimation
              sequence={[
                "לבית שלך",
                1500,
                "לעסק שלך",
                1500,
                "למשפחה שלך",
                1500,
                "לרכב שלך",
                1500,
                "לחיים רגועים",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="animated-text"
            />
          </h1>
          <p>
            אני עמנואל אינגדאו, סוכן ביטוח עם ניסיון של שנים בהתאמת פוליסות
            אישיות במיוחד עבורך. הביטוח שלך חייב להיות מותאם לצרכים האישיים שלך,
            בצורה הכי מדויקת.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="cta-button primary"
              onClick={scrollToContact}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(67, 97, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              קבל הצעת מחיר עכשיו
            </motion.button>
            <motion.button
              className="cta-button secondary"
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              למידע נוסף
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="image-container"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img src="/images/eimi.png" alt="Insurance" />
            <div className="image-blob"></div>
          </motion.div>
          <motion.div
            className="trust-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="badge-icon">✓</div>
            <div className="badge-text">מורשה משרד האוצר מס' 12345</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 L1440,120 L1440,0 C1320,80 1200,120 1080,100 C960,80 840,0 720,20 C600,40 480,100 360,80 C240,60 120,20 60,10 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
