import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        color: "#000",
        padding: "12px",
        margin: "0",
        maxWidth: "100%",
        wordWrap: "break-word",
        overflowWrap: "break-word",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      dateClassName="text-xs sm:text-sm text-secondary break-words"
      iconStyle={{ 
        background: experience.iconBg,
        width: "40px",
        height: "40px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div className="w-full overflow-hidden">
        <h3 className='text-[#915EFF] text-base sm:text-lg md:text-xl font-bold break-words leading-tight'>
          {experience.title}
        </h3>
        <p className='text-secondary text-sm sm:text-base font-semibold mt-1 break-words'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 sm:mt-4 list-disc ml-4 space-y-2 w-full'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black text-xs sm:text-sm leading-relaxed break-words pr-2'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-8 sm:mt-16 flex flex-col w-full max-w-full overflow-hidden'>
        <VerticalTimeline className="w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
