// src/components/Particles.jsx
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import ReactParticles from "react-particles";

const Particles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ReactParticles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#4361ee",
          },
          links: {
            color: "#4361ee",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="particles-container"
    />
  );
};

export default Particles;
