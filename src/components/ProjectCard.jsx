import React from 'react'
import { motion } from 'framer-motion'
import { github, pineapple, pineappleHover } from '../assets'
import { fadeIn } from '../utils/motion'

import { useTranslation } from 'react-i18next'

export const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  tags,
  index,
  active,
  handleClick
}) => {
  const { t } = useTranslation()
  const descriptionParagraphs = t(description, { returnObjects: true })

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id
          ? 'lg:flex-[3.5] flex-[10] lg:min-w-[50vw]'
          : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] min-h-[100px] lg:min-h-[75vh] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className='absolute top-0 left-0 z-10 bg-primary
        h-full w-full opacity-[0.5] rounded-[24px]'></div>

      <img
        src={image}
        alt={name}
        className='absolute w-full h-full object-cover rounded-[24px]'
      />

      {active !== id ? (
        <div className='flex items-center justify-start pr-[10.5rem]'>
          <h3
            className='font-extrabold font-beckman uppercase w-[200px] h-[30px]
          whitespace-nowrap sm:text-[27px] text-[18px] text-tertiary tracking-[1px]
          absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
          leading-none z-20'>
            {t(name)}
          </h3>
        </div>
      ) : (
        <>
          <div
            className='absolute bottom-0 p-8 justify-start w-full
              flex-col rounded-b-[24px] z-20 bg-[rgba(255,99,71,0.85)]'>
            {repo && (
              <div className='absolute inset-0 flex justify-end m-3'>
                <div
                  onClick={() => window.open(repo, '_blank')}
                  className='bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8]'>
                  <img
                    src={github}
                    alt='source code'
                    className='w-4/5 h-4/5 object-contain'
                  />
                </div>
              </div>
            )}

            <h2
              className='font-bold sm:text-[32px] text-[24px]
                text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]'>
              {t(name)}
            </h2>
            {descriptionParagraphs.map((paragraph, index) => (
              <>
                <p
                  key={index}
                  className='text-silver sm:text-[14px] text-[12px]
                w-full sm:leading-[24px] leading-[18px]
                font-poppins tracking-[1px]'>
                  {paragraph}
                </p>
                <br />
              </>
            ))}

            <div className='flex flex-wrap gap-2 mt-4'>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-[12px] font-bold font-poppins
                    px-2 py-1 border rounded-[50px]`}>
                  {t(tag.name)}
                </span>
              ))}
            </div>

            <button
              className='live-demo flex justify-between
                sm:text-[16px] text-[14px] text-timberWolf
                font-bold font-beckman items-center py-5 pl-2 pr-3
                whitespace-nowrap gap-1 sm:w-[180px] sm:h-[50px]
                w-[160px] h-[46px] rounded-[10px] glassmorphism
                sm:mt-[22px] mt-[16px] hover:bg-battleGray
                hover:text-eerieBlack transition duration-[0.2s]
                ease-in-out'
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover)
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple)
              }}>
              <img
                src={pineapple}
                alt='pineapple'
                className='btn-icon sm:w-[40px] sm:h-[34px] 
                    w-[30px] h-[30px] object-contain'
              />
              {t('projects:goProject')}
            </button>
          </div>
        </>
      )}
    </motion.div>
  )
}
