import {HERO_CONTENT} from "../constants"
import profilepic from "../assets/kevinRushProfile.png"
const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex clex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kevin Rush</h1>
            </div>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
            <p className="my-2 max-2-xl py-6 font-light tracking-tighter text-justify">{HERO_CONTENT}</p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilepic} alt="profile picture" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default hero
