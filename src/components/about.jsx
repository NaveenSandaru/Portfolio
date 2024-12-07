import { Container } from "postcss";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{y:0, opacity:1}}
      initial={{y:-50, opacity:0}}
      transition={{duaration: 2, delay:0}}
      className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          whileInView={{opacity: 1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5, delay: 0.2}}
          className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p 
              whileInView={{opacity: 1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:0.5, delay: 0.2}}
              className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</motion.p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default about
