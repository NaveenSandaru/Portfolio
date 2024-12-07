import logo from "../assets/Logo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5"

import { motion } from "framer-motion";

const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <motion.div 
        whileInView={{x:0,opacity:1}}
        initial={{x:-100,opacity:0}}
        transition={{duaration: 2, delay:0}}
        className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo"/>
        </motion.div>
        <motion.div 
        whileInView={{x:0,opacity:1}}
        initial={{x:100,opacity:0}}
        transition={{duaration: 2, delay:0}} className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a target="blank" href="https://www.linkedin.com/in/naveen-sandaru-6919772a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin/></a>
            <a target="blank "href="https://github.com/NaveenSandaru"><FaGithub/></a>
            <a target="blank" href="https://play.google.com/store/apps/developer?id=NS+Softworks"><IoLogoGooglePlaystore/></a>
            
        </motion.div>
    </nav>
  )
}

export default navbar