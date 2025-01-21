import React, { useEffect } from "react";

const StarryBg = ({ starsCount }) => {
  useEffect(() => {
    const randomizeStars = (stars) => {
      stars.forEach((star) => {
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
      });
    };

    const stars1 = document.querySelectorAll(".stars1 img");
    const stars2 = document.querySelectorAll(".stars2 img");
    const stars3 = document.querySelectorAll(".stars3 img");

    randomizeStars(stars1);
    randomizeStars(stars2);
    randomizeStars(stars3);

    const starsContainers = [
      document.querySelector(".stars1"),
      document.querySelector(".stars2"),
      document.querySelector(".stars3"),
    ];

    const parallaxSpeeds = [0.3, 0.6, 0.9];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      starsContainers.forEach((container, index) => {
        if (container instanceof HTMLElement) {
          const speed = parallaxSpeeds[index];
          container.style.transform = `translateY(${scrollPosition * speed}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderStars = (count, className, opacity, size) => {
    return (
      <div className={`${className} h-full w-full absolute animate-pulse`}>
        {Array.from({ length: count }).map((_, index) => (
          <img
            key={index}
            src="icons/star.svg"
            alt=""
            style={{
                opacity: `${opacity}`,
                width: `${size}px`,
                height: `${size}px`,
                filter: `grayscale(${Math.random() * 100}%)`,
                rotate: `${Math.random() * 360}deg`,
            }}
            className={`absolute aspect-square object-cover`}
            loading="lazy"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="top-0 left-0 absolute w-full h-full">
      {renderStars(starsCount, "stars1", 80, 24)}
      {renderStars(starsCount, "stars2", 60, 18)}
      {renderStars(starsCount, "stars3", 30, 12)}
    </div>
  );
};

export default StarryBg;
