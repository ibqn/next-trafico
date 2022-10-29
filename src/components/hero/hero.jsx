import { heroData } from "data"
import { Header } from "components/header"
import { CgArrowLongRight } from "react-icons/cg"
import { motion } from "framer-motion"
import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "variants"
import GirlImage from "./girl.svg"
import TruckImage from "./truck.svg"
import BoyImage from "./boy.svg"

export const Hero = () => {
  const { title, buttonText } = heroData
  return (
    <section className="bg-hero bg-left-top bg-no-repeat lg:mb-80">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative mx-auto min-h-[800px] lg:min-h-[950px]"
      >
        <motion.div variants={fadeInDown}>
          <Header />
        </motion.div>

        <motion.h1
          variants={fadeInDown}
          className="h1 mb-[60px] max-w-[740px] pt-[12rem] text-white"
        >
          {title}
        </motion.h1>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          variants={fadeInDown}
          className="button"
        >
          {buttonText} <CgArrowLongRight className="text-[30px]" />
        </motion.button>
        <motion.div
          variants={girlAnim}
          className="absolute bottom-0 right-[200px]  hidden lg:flex"
        >
          <GirlImage />
        </motion.div>
        <motion.div
          variants={heroTruckAnim}
          className="absolute -bottom-[25%] -left-[30%] hidden lg:flex"
        >
          <TruckImage />
        </motion.div>
        <motion.div
          variants={boyAnim}
          className="absolute right-[380px] bottom-0 z-10 hidden lg:flex"
        >
          <BoyImage />
        </motion.div>
      </motion.div>
    </section>
  )
}
