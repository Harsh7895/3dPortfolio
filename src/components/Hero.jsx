import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content Container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] sm:max-w-7xl max-w-full mx-auto flex flex-row items-start gap-5`}
      >
        {/* Dot and Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7a50d5] px-2">
            <div className="w-1 sm:h-80 h-48 violet-gradient mt-1"></div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#7a50d5]">Harsh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I am a MERN stack Developer,
            <br className="sm:block hidden" /> I develop 3D visuals.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className="absolute sm:bottom-2 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
