import { footerData } from "data"
import Image from "next/image"
import truckImage from "./truck.svg?url"
import hillImage from "./hill.svg?url"
import logoImage from "./logo.svg?url"
import { CgArrowLongRight } from "react-icons/cg"
import Link from "next/link"

export const Footer = () => {
  const { text, form, links } = footerData

  const { labelName, placeholderName, labelEmail, placeholderEmail, btnText } =
    form

  return (
    <footer className="relative bg-darkblue pt-12 lg:min-h-[738px] lg:bg-transparent lg:bg-footer lg:bg-left-bottom lg:bg-no-repeat lg:pt-0">
      <div className="container mx-auto flex flex-col justify-between lg:min-h-[738px]">
        <div className="absolute -top-24 -left-[6.8%] hidden lg:flex">
          <Image src={truckImage} width={430} height={209} alt="Truck" />
        </div>
        <div className="absolute top-[22px] left-0 z-10 hidden lg:flex">
          <Image src={hillImage} width={128} height={94} />
        </div>

        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-[95px] lg:gap-y-0 lg:pr-[95px]">
          <div className="flex-1 border-l-[10px] border-accent py-4 text-white">
            <p className="ml-[40px] max-w-[330px] text-xl leading-[30px]">
              {text}
            </p>
          </div>
          <form className="flex w-full max-w-[550px] flex-1 flex-col space-y-[40px] rounded-[10px] bg-white px-[35px] py-[25px] drop-shadow-primary lg:order-2 lg:px-[75px] lg:py-[52px]">
            <div className="flex flex-col">
              <label className="mb-[10px] font-light" htmlFor="name">
                {labelName}
              </label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder={placeholderName}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-[10px] font-light" htmlFor="email">
                {labelEmail}
              </label>
              <input
                className="input"
                type="email"
                id="email"
                placeholder={placeholderEmail}
              />
            </div>
            <button className="button self-start transition hover:bg-accent-hover">
              {btnText}
              <CgArrowLongRight className="text-[30px]" />
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between py-[120px] lg:flex-row lg:pr-24">
          <div className="mx-auto mb-6 lg:mx-0 lg:mb-0">
            <Link href={"/"}>
              <Image src={logoImage} width={170} height={41} />
            </Link>
          </div>

          <ul className="flex flex-col items-center gap-y-4 gap-x-[100px] text-center lg:flex-row lg:gap-y-0">
            {links.map((item, idx) => {
              const { href, name } = item

              return (
                <li
                  key={idx}
                  className="font-light text-white transition hover:text-accent"
                >
                  <Link href={href}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
