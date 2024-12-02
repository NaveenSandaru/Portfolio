import { RiReactjsLine } from "react-icons/ri"
import { RiFlutterFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { RiFireFill } from "react-icons/ri"
import { SiSpringboot } from "react-icons/si"
import { FaPhp } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { FaUnity } from "react-icons/fa"
import { PiVirtualRealityFill } from "react-icons/pi"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { SiGoogleadmob } from "react-icons/si"
const technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="ReactJS">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="NextJS">
            <RiNextjsFill className="text-7xl text-gray-100"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="Flutter">
            <RiFlutterFill className="text-7xl text-blue-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="PHP">
            <FaPhp className="text-7xl text-purple-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="SpringBoot">
            <SiSpringboot className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="NodeJS">
            <FaNodeJs className="text-7xl text-teal-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="MySQL">
            <GrMysql className="text-7xl text-blue-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="MongoDB">
            <SiMongodb className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="FireBase">
            <RiFireFill className="text-7xl text-orange-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="Unity">
            <FaUnity className="text-7xl text-gray-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="Virtual Reality">
            <PiVirtualRealityFill className="text-7xl text-white"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="Google Play Console">
            <IoLogoGooglePlaystore className="text-7xl text-blue-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4" title="Google Ad Mob">
            <SiGoogleadmob className="text-7xl text-red-500"/>
        </div>
        
      </div>
    </div>
  )
}

export default technologies
