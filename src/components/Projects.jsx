import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { projects } from '../constants'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { ProjectCard } from './ProjectCard'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const [active, setActive] = useState('project-1')

  const { t } = useTranslation()

  return (
    <div className='-mt-[6rem]'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} `}>
          {t('projects:useCases')}
        </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          {t('projects:projects')}
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-primary text-[18px] max-w-3xl leading-[30px]'>
          {t('projects:description')}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:min-h-[100vh]`}>
        <div className='mt-[50px] flex lg:flex-wrap lg:flex-row flex-col gap-5 lg:min-h-[100vh] xs:min-h-[300vh] min-h-[250vh]'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Projects, 'projects')
