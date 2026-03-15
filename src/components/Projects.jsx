import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';

const ProjectCard = ({ index, name, description, tags, url }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="w-full max-w-2xl mx-auto"
  >
    <div
      className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] 
      rounded-2xl p-8 shadow-2xl border border-white/10
      hover:border-french/40 transition duration-300 group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* Globe icon */}
            <div className="w-10 h-10 rounded-full bg-french/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-french" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="text-timberWolf text-[26px] font-bold font-beckman uppercase tracking-[1px]">
              {name}
            </h3>
          </div>
          <p className="text-silver text-[15px] font-poppins leading-[26px] max-w-lg">
            {description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-poppins font-medium uppercase tracking-[1px]
            px-3 py-1 rounded-full bg-french/20 text-french border border-french/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Visit button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
        bg-french text-eerieBlack font-bold font-beckman text-[14px] uppercase tracking-[1px]
        hover:bg-timberWolf transition duration-200 group-hover:scale-[1.02] transform"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        Visit jobsready.co.za
      </a>
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="-mt-[6rem]">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I've built</p>
      <h2 className={styles.sectionHeadTextLight}>Projects.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mb-12"
    >
      Here are real-world projects I have designed, developed, and actively manage.
    </motion.p>

    <div className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} index={index} {...project} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Projects, 'projects');
