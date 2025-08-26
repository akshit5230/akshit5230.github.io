import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
  slides: { index: number; image: string; title: string; link?: string }[]
  options?: EmblaOptionsType
}

const EmblaCarouselInventions: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className="embla__slide" key={item.index}>
              <div className="embla__slide__number">
                <Image
                  className="embla__slide__image"
                  src={item.image}
                  alt="invention"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className='embla__slide__footer'>
                {!item.link && <p>{item.title}</p>}
                {item.link && <a href={item.link} target='_blank'>
                  {item.title}
                </a>}
                {item.link && <a href={item.link} target='_blank'>
                  <Image
                    className='bg-white rounded-xs'
                    src={'/images/arrow-angular-top-right.svg'}
                    alt="invention"
                    width={10}
                    height={10}
                    priority
                  />
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarouselInventions
