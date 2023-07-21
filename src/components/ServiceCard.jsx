import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { useTranslation } from 'react-i18next'

export const ServiceCard = ({ index, title, icon }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-tertiary text-[18px] font-bold text-center'>
          {t(title)}
        </h3>
      </div>
    </motion.div>
  )
}
