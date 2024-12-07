import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/Profile.png";
import { motion } from "framer-motion";

const leftContainer = (delay)=>({
  hidden:{x: -100, opacity: 0},
  visible:{x: 0, opacity: 1, transition:{delay, duration: 0.5}}
});

const rightContainer = (delay) => ({
  hidden: {x:100, opacity: 0},
  visible: {x: 0, opacity: 1, transition:{delay, duration: 0.5}}
})

const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex clex-col items-center lg:items-start">
                <motion.h1 
                variants={leftContainer(0)}
                initial="hidden"
                whileInView="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Naveen Sandaru</motion.h1>
            </div>
            <motion.span 
            variants={leftContainer(0)}
            initial="hidden"
            whileInView="visible"
            className="inline-block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
            <motion.p 
            variants={leftContainer(0)}
            initial="hidden"
            whileInView="visible"
            className="my-2 max-2-xl py-6 font-light tracking-tighter text-justify">{HERO_CONTENT}</motion.p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div 
            variants={rightContainer(0)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center">
                <img className="rounded-2xl" src={profilepic} alt="profile picture" />
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default hero
