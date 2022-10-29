import { aboutData } from "data"
import BoyImage from "./boy.svg"

export const About = () => {
  const { title, subtitle, text } = aboutData
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <div>
            <p>{text}</p>
          </div>
        </div>
        <div className="h-[480px] w-[576px]">
          <BoyImage />
        </div>
      </div>
    </section>
  )
}
