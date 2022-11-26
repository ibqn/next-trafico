import { footerData } from "data"
import Image from "next/image"
import truckImage from "./truck.svg?url"
import hillImage from "./hill.svg?url"

export const Footer = () => {
  const { text } = footerData
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
        </div>

        <div>logo and links</div>
      </div>
    </footer>
  )
}
