import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { SectionWrapper } from '../hoc'
import {useRef, useState } from 'react'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'


const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const formRef=useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message:'',
  })

  const [loading, setLoading] = useState(false)
  
  const _handleChange = (e) => {
    const{name,value}=e.target
    setForm({...form,[name]:value})
  }

  const templateParams = {
    from_name: form.name,
    to_name:'Jenny',
    from_email: form.email,
    to_email:'huntergarden666@gmail.com',
    message: form.message,
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you soon');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.')
    })

  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={_handleSubmit}
          className='mt-12 flex flex-col gap-8 '
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={_handleChange} 
              placeholder="what's your name?"
              className='bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your email
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={_handleChange} 
              placeholder="what's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your Message
            </span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={_handleChange} 
              placeholder="what do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
          {loading? 'Sending...':'Send'}
          </button>
      </form>
      </motion.div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350]'
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,'contact')