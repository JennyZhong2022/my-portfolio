import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { SectionWrapper } from '../hoc'
import { github } from '../assets';
// import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants';
import { useEffect, useState } from "react";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link,isMobile }) => {

  return(
    <motion.div
      // variants={!isMobile?fadeIn('up', 'spring', index * 0.5, 0.75):undefined}
    >
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed:450
        }}
        
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
       <div onClick={()=>window.open(website_link,'_blank')}>
        <div
          
          className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name} className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
            onClick={()=>window.open(source_code_link,'_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{ description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2' >
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
        </Tilt>
  </motion.div>)
}

const Works = () => {

  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const _handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", _handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", _handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div
        // variants={textVariant()}
      >
      <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          // variants={isMobile?fadeIn('', '', 0.1, 1):undefined}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work.Each one was finished in one week. Click the card to go the project website, click the github sign to go github repo.  
      </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project,index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            isMobile={isMobile}
          />
        ))}

      </div>


    </>
    )
}

export default SectionWrapper(Works,'work')