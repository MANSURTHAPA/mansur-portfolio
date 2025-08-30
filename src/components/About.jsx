import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile IT professional with both Bachelor’s and Master’s degrees in Information Technology, combining deep technical expertise in full-stack development with certified Salesforce administration and IT support experience.

My skill set spans software development (front-end and back-end), cloud platforms, CRM systems, and end-user support, enabling me to deliver comprehensive digital solutions that align with business goals. <br/>
Key strengths include:<br/>
- Full-Stack Development: Proficient in JavaScript (React, Node.js), Python, C#, SQL, and RESTful APIs <br/>
- Salesforce Platform: Certified Administrator with hands-on experience in configuration, automation, and user training <br/>
- IT Support & Systems Administration: Skilled in troubleshooting, ticketing systems, and infrastructure maintenance <br/>
- Agile Development & Collaboration: Experienced in Agile methodologies, code versioning (Git), and CI/CD pipelines <br/>
- Data Management & Reporting: Expertise in SQL databases, data integrity, and analytics reporting <br/>

I’m passionate about bridging the gap between technology and business by delivering scalable, user-centric solutions. I am actively seeking roles that leverage my full-stack development skills alongside Salesforce and IT support expertise.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
