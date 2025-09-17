import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CV = () => {
  const cvRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const cvEl = cvRef.current;
    const buttonEl = buttonRef.current;

    // Animate CV section
    gsap.fromTo(
      cvEl,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cvEl,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );

    // Animate download button
    gsap.fromTo(
      buttonEl,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: buttonEl,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/KhiariMohamedResume (1).pdf';
    link.download = 'KhiariMohamedResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>Download my</p>
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center`}>
        <div
          ref={cvRef}
          className="bg-black-200 p-10 rounded-3xl w-full max-w-2xl text-center"
        >
          <div className="mb-8">
            <h3 className="text-black font-bold text-[28px] mb-4">
              Khiari Mohamed
            </h3>
            <p className="text-secondary text-[18px] leading-[30px]">
              Full-Stack Developer specializing in modern web technologies, 
              AI & Machine Learning, and scalable application development. 
              Download my complete resume to learn more about my experience, 
              skills, and projects.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* CV Preview Icon */}
            <div className="w-24 h-32 bg-gradient-to-b from-[#915EFF] to-[#151030] rounded-lg flex items-center justify-center shadow-lg">
              <svg 
                className="w-12 h-12 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Download Button */}
            <button
              ref={buttonRef}
              onClick={handleDownload}
              className="bg-gradient-to-r from-[#915EFF] to-[#151030] hover:from-[#151030] hover:to-[#915EFF] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>

            <p className="text-secondary text-[14px] mt-2">
              PDF • Updated January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(CV, "");