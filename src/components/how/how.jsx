import girlImage from "./girl.svg?url"
import { howData } from "data"
import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, staggerTextContainer } from "variants"
import Image from "next/image"

export const How = () => {
  const { title, subtitle } = howData
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          variants={staggerTextContainer}
          whileInView={"animate"}
          className="flex flex-col items-center gap-x-10 lg:flex-row"
        >
          <motion.div variants={fadeInRight} className="flex-1">
            <Image
              src={girlImage}
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-[550px]"
              alt="Support girl"
            />
          </motion.div>
          <motion.div
            variants={fadeInLeft}
            className="mt-[74px] max-w-[455px] flex-1"
          >
            <h3 className="h3">{title}</h3>
            <p className="lead">{subtitle}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
