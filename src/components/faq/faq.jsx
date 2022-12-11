import { faqData } from "data"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  fadeInRight,
  fadeInLeft,
  staggerTextContainer,
  staggerAccordionContainer,
} from "variants"
import boyImage from "./boy.svg?url"
import { Accordion } from "components/accordion"

export const Faq = () => {
  const { title, preTitle, accordions } = faqData
  return (
    <section className="mb-[60px] min-h-[1150px] bg-right-top bg-no-repeat lg:mb-[160px] lg:bg-faq lg:pt-40 lg:pb-24">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center pt-8 pb-16 lg:flex-row lg:justify-start lg:pt-16 lg:pb-32"
        >
          <motion.div variants={fadeInRight} className="lg:w-2/5">
            <h3 className="h3">{preTitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          <motion.div
            variants={fadeInLeft}
            className="lg:absolute lg:-right-16 lg:-top-16"
          >
            <Image
              src={boyImage}
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-[608px]"
              alt="Boy is thinking about questions"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          variants={staggerAccordionContainer}
          whileInView={"animate"}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-x-[20px] gap-y-[10px] lg:grid-cols-2"
        >
          {accordions?.map((accordion, index) => (
            <Accordion accordion={accordion} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
