import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi"
import { motion } from "framer-motion"
import { fadeInRight } from "variants"
import { useState } from "react"
import { classNames } from "util/class-names"

export const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { question, answer } = accordion

  return (
    <motion.div variants={fadeInRight} className="max-w-[550px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[90px] w-full cursor-pointer items-center rounded-[10px] bg-white px-[35px] drop-shadow-primary"
      >
        <div className="flex w-full items-center justify-between">
          <p className="lead max-w-[400px] font-medium leading-snug">
            {question}
          </p>
          <div className="transition-all duration-500">
            {isOpen ? (
              <motion.div initial="initial" animate={{ rotate: 180 }}>
                <HiOutlineMinus className="text-[28px] text-accent" />
              </motion.div>
            ) : (
              <motion.div initial="initial" animate={{ rotate: 0 }}>
                <HiOutlinePlus className="text-[28px] text-accent" />
              </motion.div>
            )}
          </div>
        </div>
      </button>

      <div
        className={classNames(
          isOpen
            ? "my-2 max-h-[160px] rounded-[10px] bg-[#fff7f5] p-8 drop-shadow-primary"
            : "max-h-0",
          "h-[160px] overflow-hidden transition-all"
        )}
      >
        <p className="lead mt-2 leading-[30px]">{answer}</p>
      </div>
    </motion.div>
  )
}
