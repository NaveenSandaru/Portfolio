import {CONTACT} from "../constants";
import { motion } from "framer-motion";
const contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{y:0,opacity:1}}
        initial={{y:-50,opacity:0}}
        transition={{duaration: 2, delay:0}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.a href="mailto:naveensandaru2@gmail.com" 
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            transition={{duaration: 2, delay:0.2}}
            className="border-b my-4">{CONTACT.email}</motion.a>
            <motion.p 
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            transition={{duaration: 2, delay:0.2}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.p 
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            transition={{duaration: 2, delay:0.2}}
            className="my-4">{CONTACT.address}</motion.p>
        </div>
    </div>
  )
}

export default contacts
