import { aboutData } from "data"
import BoyImage from "./boy.svg"
import { motion } from "framer-motion"
import { fadeInUp, fadeInDown, staggerTextContainer } from "variants"

export const About = () => {
  const { title, subtitle, text } = aboutData
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          className="flex flex-col gap-x-[20px] lg:flex-row"
        >
          <motion.div variants={fadeInDown} className="mt-[74px] flex-1">
            <h3 className="h3">{title}</h3>
            <p className="lead mb-[70px] max-w-[470px]">{subtitle}</p>
            <div
              className="mb-8 flex h-[160px] max-w-[570px] items-center justify-center border-l-[10px] border-accent
             bg-accent/10 lg:mb-0"
            >
              <p className="max-w-[320px] text-[20px] font-medium leading-normal lg:max-w-[460px] lg:text-[24px] lg:leading-[32px]">
                {text}
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1">
            <BoyImage className="h-auto max-w-[576px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
