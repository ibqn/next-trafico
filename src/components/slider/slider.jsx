import { Swiper, SwiperSlide } from "swiper/react"

import styles from "./slider.module.css"

import "swiper/css"
import "swiper/css/navigation"
import { SliderCard } from "components/slider-card"

export const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      modules={[]}
      className={styles.testimonialSlider}
    >
      {clients?.map((client, index) => {
        return (
          <SwiperSlide key={index}>
            <SliderCard client={client} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
