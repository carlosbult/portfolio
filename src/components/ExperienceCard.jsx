import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTranslation } from 'react-i18next'

export const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation()

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#eaeaec',
        color: '#17161F',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
      }}
      contentArrowStyle={{
        borderRight: '7px solid #eaeaec'
      }}
      date={
        <div>
          <h3 className='text-primary text-[18px] font-bold font-beckman'>
            {t(experience.date)}
          </h3>
        </div>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }>
      <div>
        <h3 className='text-jetLight text-[24px] font-bold font-beckman tracking-[2px]'>
          {t(experience.title)}
        </h3>
        <p
          className='text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]'
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        {experience.web === '' ? null : (
          <a
            href={experience.web}
            target='_blank'
            rel='noreferrer'
            className='text-taupe text-[18px] font-semibold font-overcameBold tracking-[1px] hover:text-primary transition duration-[0.2s] ease-in-out   '>
            {t('experience:website')}
          </a>
        )}{' '}
      </div>
    </VerticalTimelineElement>
  )
}
