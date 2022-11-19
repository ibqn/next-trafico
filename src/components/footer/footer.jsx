import { footerData } from "data"
import Image from "next/image"
import truckImage from "./truck.svg?url"
import hillImage from "./hill.svg?url"

export const Footer = () => {
  return (
    <footer className="relative bg-darkblue pt-12 lg:min-h-[738px] lg:bg-transparent lg:bg-footer lg:bg-left-bottom lg:bg-no-repeat lg:pb-0">
      <div className="container mx-auto">
        <div className="absolute -top-24 -left-[6.8%] hidden lg:flex">
          <Image src={truckImage} width={430} height={209} alt="Truck" />
        </div>
        <div className="absolute top-[22px] left-0 z-10 hidden lg:flex">
          <Image src={hillImage} width={128} height={94} />
        </div>
      </div>
    </footer>
  )
}
