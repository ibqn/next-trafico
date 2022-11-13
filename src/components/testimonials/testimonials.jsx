import { Slider } from "components/slider"
import { testimonialData } from "data"

export const Testimonials = () => {
  const { clients, preTitle, title } = testimonialData
  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5">
            <h3 className="h3">{preTitle}</h3>
            <h2 className="h2 mb-6">{title}</h2>
          </div>
          <div className="lg:absolute lg:right-0 lg:w-3/5">
            <Slider clients={clients} />
          </div>
        </div>
      </div>
    </section>
  )
}
