import {useRef, useState} from "react"
import { motion } from "framer-motion"

const HomePage = () => {
  
  const backgrounds = [
    "https://fondosmil.com/fondo/49838.jpg",
    "https://wallpapercave.com/wp/wp7607683.jpg"
  ]

  return (
    <div
      className="w-full h-screen overflow-auto grid grid-cols-5"
      style={{
        backgroundImage: `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <LeftSide />
      <HomeWrapper />
    </div>
  )
}

// TODO put this component in a separate file
const LeftSide = () => {
  return (
    <section className="bg-gray-900/[.9] backdrop-blur-xl">
a
    </section>
  )
}

const HomeWrapper = () => {
  
  const [videos, setVideos] = useState([])
  const dragAreaRef = useRef(null)

  return (
    <section className="overflow-auto p-10 bg-gray-900/[.55] col-span-4 backdrop-blur-xl">
      <header className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <input
          className="w-full px-4 py-2 text-gray-100 placeholder-gray-600 bg-transparent placeholder:font-medium focus:outline-none"
          type="text"
          placeholder="Search..."
        />
      </header>

      <h1 className="pt-10 pb-5 text-lg font-bold tracking-wider text-gray-300">Recent Videos</h1>
      <motion.div ref={dragAreaRef} className="flex w-full overflow-x-hidden overflow-y-hidden h-60">
        {
          /*
        <div className="min-w-[30rem] bg-red-500">a</div>
        <div className="min-w-[30rem] bg-red-500">a</div>
        <div className="min-w-[30rem] bg-red-500">a</div>
        <div className="min-w-[30rem] bg-red-500">a</div>
        <div className="min-w-[30rem] bg-red-500">a</div>
          */
        }
        <motion.div
          className="flex"
          dragElastic={0.1}
          dragDirectionLock
          drag="x"
          dragConstraints={dragAreaRef}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </motion.div>
      </motion.div>

    </section>
  )
}


const VideoCard = ({
  miniature = "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/09/08121914/everton-goalkeeper-jordan-pickford-during-their-clash-with-leeds-utd-2021.jpg",
  title = "Everton goal keeper Jordan Pickford during their clash with Leeds United",
  author = "Everton",
  duration = "1:30"

}) => {
  return (
    <div className="h-56 mx-2 my-auto overflow-hidden rounded-lg group w-60 bg-gray-700/50 hover:bg-gray-400/95 hover:scale-105 transition-all">
      <div
        onClick={() => {
          console.log("clicked")
        }}
        style={{
          backgroundImage: `url(${miniature})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="p-2 opacity-50 hover:cursor-pointer group-hover:opacity-70 h-28 transition-all">
        <span className="text-xs text-gray-100 bg-gray-900 py-1 px-1.5 rounded-lg">4:30</span>
      </div>
      <div className="p-3.5">
        <a className="text-sm font-black tracking-wide text-gray-100 cursor-pointer group-hover:text-gray-800 transition-all">JORDAN PICKFORD'S TOP 10 SAVES OF 2020/21</a>
        <br />
        <a className="text-xs text-gray-500 cursor-pointer">100k views&nbsp;<span className="text-[10px]">●</span>&nbsp; 1 day ago</a>
      </div>
    </div>
  )
}


export default HomePage
