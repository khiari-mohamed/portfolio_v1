import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  // Split technologies into 3 rows
  const row1 = technologies.slice(0, 7);
  const row2 = technologies.slice(7, 14);
  const row3 = technologies.slice(14, 21);

  useEffect(() => {
    // Seamless infinite scroll for row 1 (left)
    gsap.to(".row-1", {
      xPercent: -100,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // Seamless infinite scroll for row 2 (right)
    gsap.fromTo(".row-2", 
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );

    // Row 3 is fixed (no animation)

    // Original fade-in animation
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  const renderRow = (techs, rowClass) => (
    <div className={`flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 ${rowClass}`}>
      {/* Create 4 copies for seamless infinite scroll */}
      {[...techs, ...techs, ...techs, ...techs].map((technology, index) => (
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0" key={`${technology.name}-${index}`}>
          <img
            src={technology.icon}
            alt={technology.name}
            className="tech-icon w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="px-2 sm:px-4">
      <div className="tech-icons-wrapper overflow-hidden space-y-6 sm:space-y-8 md:space-y-10">
        {/* Row 1 - Slides Left */}
        <div className="overflow-hidden">
          {renderRow(row1, "row-1")}
        </div>
        
        {/* Row 2 - Slides Right */}
        <div className="overflow-hidden">
          {renderRow(row2, "row-2")}
        </div>
        
        {/* Row 3 - Fixed */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center flex-wrap">
          {row3.map((technology) => (
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="tech-icon w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
