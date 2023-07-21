import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { send, sendHover } from '../assets'
import { socialMedia } from '../constants'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'service_6kwxy58', // paste your ServiceID here (you'll get one when your service is created).
        'template_llp5da6', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Carlos Acevedo Bult', // put your name here.
          from_email: form.email,
          to_email: 'acevedo.bult@gmail.com', //put your email here.
          message: form.message
        },
        'KG9d9ZSZAGyu3Wy97' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <div
      className='-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'>
        <p className={styles.sectionSubTextLight}>{t('contact:sub-title')}</p>
        <h3 className={styles.sectionHeadTextLight}>{t('contact:title')}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-10 flex flex-col gap-6 font-poppins'>
          <label className='flex flex-col'>
            <span className='text-primary font-medium mb-4'>
              {t('contact:labels.name')}
            </span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact:inputs.name')}
              className='bg-tertiary py-4 px-6
              placeholder:text-taupe
              text-primary rounded-lg
              font-medium border-solid border-2 border-night outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-primary font-medium mb-4'>
              {t('contact:labels.email')}
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              required
              onChange={handleChange}
              placeholder={t('contact:inputs.email')}
              className='bg-tertiary py-4 px-6
              placeholder:text-taupe
              text-primary rounded-lg
            font-medium border-solid border-2 border-night outline-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-primary font-medium mb-4'>
              {t('contact:labels.message')}
            </span>
            <textarea
              rows='7'
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact:inputs.message')}
              className='bg-tertiary py-4 px-6
              placeholder:text-taupe
              text-primary rounded-lg outline-none
              font-medium resize-none border-solid border-2 border-night '
            />
          </label>

          <button
            type='submit'
            className='live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] bg-primary
            w-[150px] h-[45px] rounded-[10px] bg-night 
            hover:bg-secondary hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out'
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover)
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send)
            }}>
            {loading
              ? `${t('contact:labels.sending')}`
              : `${t('contact:labels.send')}`}
            <img
              src={send}
              alt='send'
              className='contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain'
            />
          </button>
        </form>

        <div className='flex w-full justify-around mt-10'>
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target='_blank'
              rel='noreferrer'
              className='w-[40px] h-[40px]
              flex justify-center items-center
              transition duration-[0.2s] ease-in-out'>
              <img
                src={social.icon}
                alt={social.id}
                className='w-[35px] h-[35px] object-contain'
              />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
