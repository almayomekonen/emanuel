// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1200, label: "לקוחות מרוצים", icon: "👨‍👩‍👧‍👦" },
    { value: 95, label: "אחוז שביעות רצון", icon: "⭐" },
    { value: 17, label: "שנות ניסיון", icon: "🏆" },
    { value: 24, label: "חברות ביטוח", icon: "🤝" },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.value === 95 ? "%" : ""}
                />
              ) : (
                0
              )}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
