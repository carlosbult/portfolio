import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ServiceCard } from './ServiceCard'

import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className='-mt-[6rem]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about:intro')}</p>
        <h2 className={styles.sectionHeadText}>{t('about:about')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-tertiary text-[18px] max-w-3xl leading-[30px]'>
        {t('about:paragraph-1')}
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-tertiary text-[18px] max-w-3xl leading-[30px]'>
        {t('about:paragraph-2')}
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-tertiary text-[18px] max-w-3xl leading-[30px]'>
        {t('about:paragraph-3')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
