import { RiReactjsLine } from "react-icons/ri"
import { RiFlutterFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { DiPostgresql } from "react-icons/di"
import { RiFireFill } from "react-icons/ri"
import { SiSpringboot } from "react-icons/si"
import { FaPhp } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { FaUnity } from "react-icons/fa"
import { PiVirtualRealityFill } from "react-icons/pi"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { SiGoogleadmob } from "react-icons/si"
import {motion} from "framer-motion";

const iconVariant = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [2, -2],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});
const technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{y:0, opacity:1}}
      initial={{y:-50, opacity:0}}
      transition={{duaration: 2, delay:0}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:0.5, delay:0.2}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariant(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="ReactJS">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="NextJS">
            <RiNextjsFill className="text-7xl text-gray-100"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="Flutter">
            <RiFlutterFill className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="PHP">
            <FaPhp className="text-7xl text-purple-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="SpringBoot">
            <SiSpringboot className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="NodeJS">
            <FaNodeJs className="text-7xl text-teal-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="MySQL">
            <GrMysql className="text-7xl text-blue-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="PostgreSQL">
            <DiPostgresql className="text-7xl text-blue-900"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="MongoDB">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="FireBase">
            <RiFireFill className="text-7xl text-orange-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="Unity">
            <FaUnity className="text-7xl text-gray-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="Virtual Reality">
            <PiVirtualRealityFill className="text-7xl text-white"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="Google Play Console">
            <IoLogoGooglePlaystore className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariant(2.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" title="Google Ad Mob">
            <SiGoogleadmob className="text-7xl text-red-500"/>
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default technologies
