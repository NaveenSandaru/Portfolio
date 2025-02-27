import {PROJECTS} from "../constants"
import { motion } from "framer-motion"
const projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{y:0, opacity:1}}
      initial={{y:-50, opacity:0}}
      transition={{duaration: 2, delay:0.2}}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index)=>(
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{x:0,opacity:1}}
            initial={{x:-100,opacity:0}}
            transition={{duaration: 2, delay:0}}
            className="w-full lg:w-1/4">
              <img 
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded mx-auto md:mx-0"
              />
            </motion.div>
            <motion.div 
            whileInView={{x:0,opacity:1}}
            initial={{x:100,opacity:0}}
            transition={{duaration: 2, delay:0}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-center md:text-start">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start">
                {project.technologies.map((tech,index)=>(
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
              </div>
            </motion.div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default projects
