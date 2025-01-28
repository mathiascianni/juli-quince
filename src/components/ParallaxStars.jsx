import React, { useEffect, useRef, useState } from "react";

const StarLayer = ({ count, size, speed, containerHeight }) => {
  const stars = Array.from({ length: count }, (_, index) => {
    const style = {
      top: `${Math.random() * containerHeight}px`, // Distribuye las estrellas en toda la altura
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      rotate: `${Math.random() * 360}deg`,
    };
    return (
      <img
        src="/icons/star.svg"
        key={index}
        className="absolute animate-twinkle"
        style={style}
      />
    );
  });

  return <div className="absolute inset-0">{stars}</div>;
};

const ParallaxStars = ({
  starCounts = [20, 20, 20],
  starSizes = [16, 12, 8],
  speeds = [0.7, 0.5, 0.2], // Velocidades relativas al scroll
}) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Calcula la altura total de la página después del renderizado inicial
  useEffect(() => {
    const updateContainerHeight = () => {
      const height = document.documentElement.scrollHeight;
      setContainerHeight(height);
    };

    // Actualiza la altura al cargar la página
    updateContainerHeight();

    // Vuelve a calcular la altura si la ventana cambia de tamaño
    window.addEventListener("resize", updateContainerHeight);
    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

  // Aplica el efecto de parallax al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const layers = containerRef.current.children;

      // Aplicar el efecto de parallax a cada capa
      Array.from(layers).forEach((layer, index) => {
        const speed = speeds[index];
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speeds]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full overflow-hidden"
      style={{ height: `${containerHeight}px` }} // Ajusta la altura al total de la página
    >
      <StarLayer
        count={starCounts[0]}
        size={starSizes[0]}
        speed={speeds[0]}
        containerHeight={containerHeight}
      />
      <StarLayer
        count={starCounts[1]}
        size={starSizes[1]}
        speed={speeds[1]}
        containerHeight={containerHeight}
      />
      <StarLayer
        count={starCounts[2]}
        size={starSizes[2]}
        speed={speeds[2]}
        containerHeight={containerHeight}
      />
    </div>
  );
};

export default ParallaxStars;