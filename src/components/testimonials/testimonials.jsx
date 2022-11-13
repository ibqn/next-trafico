import { Slider } from "components/slider"
import { testimonialData } from "data"

export const Testimonials = () => {
  const { clients, preTitle, title } = testimonialData
  return (
    <section className="min-h-[600px] bg-green-100">
      <div className="container mx-auto">
        <div>
          <div className="lg:w-2/5">
            <h3 className="h3">{preTitle}</h3>
            <h2 className="h2 mb-6">{title}</h2>
          </div>
          <Slider clients={clients} />
        </div>
      </div>
    </section>
  )
}
