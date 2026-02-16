import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Certificates() {
  return (
    <div className="section">
      <h2 className="section-title">Certificates</h2>
      <Swiper slidesPerView={1} spaceBetween={20}>
        <SwiperSlide><div className="box">Front-End – MySkill</div></SwiperSlide>
        <SwiperSlide><div className="box">UI/UX – Bimbing.ID</div></SwiperSlide>
      </Swiper>
    </div>
  )
}
