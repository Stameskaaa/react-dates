import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SwiperComponent.css';
import { Navigation, Pagination } from 'swiper/modules';
import { SliderItem } from '../SliderItem/SliderItem';
import { useAppSelector } from '../../redux/hooks/hooks';

export function SwiperComponent() {
  const [swiperButtState, setSwiperButtState] = useState({ prev: true, next: false });
  const { arrayFacts, activeIndex } = useAppSelector((state) => state.number);

  const handleSlideChange = (e: any) => {
    //FIX
    if (e.isBeginning) {
      setSwiperButtState({ prev: true, next: false });
    }

    if (e.isEnd) {
      setSwiperButtState({ prev: false, next: true });
    }

    if ((swiperButtState.prev || swiperButtState.next) && !e.isBeginning && !e.isEnd) {
      setSwiperButtState({ prev: false, next: false });
    }
  };

  return (
    <>
      <div className="SwiperComponentWrapper">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          onSlideChange={handleSlideChange}>
          {arrayFacts[activeIndex].map((fact, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <SliderItem year={fact.year} text={fact.fact} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={!swiperButtState.prev ? 'swiper-btn-prev' : 'swiper-btn-prev hidden'} />
        <button className={!swiperButtState.next ? 'swiper-btn-next' : 'swiper-btn-next hidden'} />
      </div>
    </>
  );
}
