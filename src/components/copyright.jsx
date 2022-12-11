import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa"
import { fadeInUp } from "variants"

const socialMediaLinks = [
  {
    icon: FaYoutube,
    href: "/",
  },
  {
    icon: FaInstagram,
    href: "/",
  },
  {
    icon: FaGithub,
    href: "/",
  },
]

export const Copyright = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      className="h-[140px] bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex h-full items-center justify-between lg:pr-24">
          <p>Copyright &copy; 2022</p>
          <div className="flex gap-x-[30px]">
            {socialMediaLinks.map((item) => {
              const { icon: ComponentIcon, href } = item
              return (
                <Link href={href}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent-hover">
                    <ComponentIcon className="text-lg" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
