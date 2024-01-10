import { Link } from "react-router-dom"
import { styles } from "../styles"
import { useState } from "react"
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { github,linkedin } from '../assets';


const Navbar = () => {
  const [active, SetActive] = useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            SetActive('')
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Jenny &nbsp;
            <span className="sm:block hidden"> |     Full-Stack Web Developer</span></p>
          
            <div
            onClick={()=>window.open('https://www.linkedin.com/in/jenny-zhong-840022239/','_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={linkedin} alt="linkedin" className='w-1/2 h-1/2 object-contain' />
            </div>
            <div
            onClick={()=>window.open('https://github.com/JennyZhong2022','_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
        
        </Link>
        
        

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li key={link.id}
              className={`${active === link.title
                  ? 'text-white'
                  : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => SetActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
           </li>
          ))}

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle?close:menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={()=>setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link)=>(
            <li key={link.id}
              className={`${active === link.title
                ? 'text-white'
                : 'text-secondary'
                } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                SetActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
           </li>
          ))}

        </ul>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar