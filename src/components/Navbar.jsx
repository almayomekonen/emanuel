import { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="navbar-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">עמנואל אינגדאו</span>
          <span className="logo-subtitle">סוכן ביטוח מורשה</span>
        </motion.div>

        <div className="nav-links-desktop">
          {["ראשי", "שירותים", "תהליך העבודה", "המלצות", "צור קשר"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item}`}
                whileHover={{ scale: 1.1, color: "var(--primary)" }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        <motion.div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {["ראשי", "שירותים", "תהליך העבודה", "המלצות", "צור קשר"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
