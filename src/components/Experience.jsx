import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { download, downloadHover, resume } from '../assets'
import { ExperienceCard } from './ExperienceCard'

import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} sm:pl-16 pl-[2rem]`}>
          {t('experience:sub-title')}
        </p>
        <h2 className={`${styles.sectionHeadTextLight} sm:pl-16 pl-[2rem]`}>
          {t('experience:title')}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className='vertical-timeline-custom-line'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          {/* <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#17161F',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #eaeaec'
            }}
            iconStyle={{ background: '#17161F' }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={resume}
                  alt='resume'
                  className='w-[45%] h-[45%] object-contain'
                />
              </div>
            }>
            <button
              className='live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
              w-[150px] h-[46px] rounded-[10px] bg-primary 
              sm:mt-[22px] mt-[16px] hover:bg-secondary 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out'
              onClick={() =>
                window.open(
                  'resume link', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover)
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download)
              }}>
              {t('experience:resume')}
              <img
                src={download}
                alt='download'
                className='download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain'
              />
            </button>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
