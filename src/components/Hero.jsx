import { motion } from 'framer-motion';
import { styles } from '../styles';
import { whiteabstract, worldmap, onndwela } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={whiteabstract}
          alt="background"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="background"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[180px] top-[100px] 
          lg:top-[130px] xl:top-[180px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-col sm:flex-row items-center
          justify-between gap-8`}
        >
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Freelance badge */}
            <div className="inline-flex items-center gap-2 mb-5 self-start">
              <span
                className="px-4 py-1.5 rounded-full text-[12px] font-poppins font-semibold 
                uppercase tracking-[2px] bg-eerieBlack text-timberWolf border border-french/40
                shadow-lg"
              >
                🌐 Available for Freelance
              </span>
            </div>

            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase leading-tight`}
            >
              Hi, I&apos;m
              <br />
              <span
                className="sm:text-battleGray sm:text-[3.8rem]
                text-eerieBlack text-[2.2rem] font-mova
                font-extrabold uppercase leading-tight"
              >
                Tshivhandekano
              </span>
              <br />
              <span
                className="sm:text-battleGray sm:text-[3.8rem]
                text-eerieBlack text-[2.2rem] font-mova
                font-extrabold uppercase"
              >
                Onndwela
              </span>
            </h1>

            {/* Roles */}
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              <span className="text-[13px] font-poppins font-semibold text-french uppercase tracking-[1px]">
                Freelance Web Developer
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-[13px] font-poppins font-semibold text-gray-500 uppercase tracking-[1px]">
                DevOps
              </span>
            </div>

            <p className={`${styles.heroSubText} mt-1 text-gray-500 max-w-lg`}>
              I build professional websites for businesses &amp; manage your
              online presence end-to-end.
            </p>

            {/* CTA */}
            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-eerieBlack text-timberWolf 
                font-poppins font-semibold text-[13px] uppercase tracking-[1px]
                hover:bg-french hover:text-eerieBlack transition duration-200"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border-2 border-eerieBlack text-eerieBlack
                font-poppins font-semibold text-[13px] uppercase tracking-[1px]
                hover:bg-eerieBlack hover:text-timberWolf transition duration-200"
              >
                Hire Me
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-8">
              <a href="#about">
                <div
                  className="w-[35px] h-[64px] rounded-3xl border-4 
                border-french border-dim flex justify-center items-start p-2"
                >
                  <motion.div
                    animate={{ y: [0, 24, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    className="w-3 h-3 rounded-full bg-taupe mb-1"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right — profile card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-4 
            bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl 
            px-8 py-8 border border-white/80
            sm:min-w-[230px] min-w-0 w-full sm:w-auto flex-shrink-0"
          >
            {/* Circular photo */}
            <div
              className="w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] 
              rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-xl"
            >
              <img
                src={onndwela}
                alt="Tshivhandekano Onndwela"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name & details */}
            <div className="text-center">
              <h2 className="text-eerieBlack font-bold font-beckman text-[16px] uppercase tracking-[1px] leading-tight">
                Tshivhandekano
              </h2>
              <h2 className="text-eerieBlack font-bold font-beckman text-[16px] uppercase tracking-[1px]">
                Onndwela
              </h2>
              <p className="text-french text-[12px] font-poppins mt-1 font-semibold uppercase tracking-[1px]">
                Freelance Web Developer
              </p>
              <p className="text-gray-500 text-[11px] font-poppins mt-0.5">
                DevOps | IT
              </p>
              <p className="text-gray-400 text-[11px] font-poppins mt-1">
                📍 Johannesburg, Gauteng
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.linkedin.com/in/onndwela-tshivha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eerieBlack hover:text-french transition duration-200"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Sbandy547"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eerieBlack hover:text-french transition duration-200"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:ondwelasbandy@gmail.com"
                className="text-eerieBlack hover:text-french transition duration-200"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
