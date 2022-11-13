import { Slider } from "components/slider"
import { testimonialData } from "data"
import { motion } from "framer-motion"
import { fadeInUp, staggerTextContainer } from "variants"

export const Testimonials = () => {
  const { clients, preTitle, title } = testimonialData
  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          whileInView={"animate"}
          variants={staggerTextContainer}
          className="flex flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp} className="lg:w-2/5">
            <h3 className="h3">{preTitle}</h3>
            <h2 className="h2 mb-6">{title}</h2>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="lg:absolute lg:right-0 lg:w-3/5"
          >
            <Slider clients={clients} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
