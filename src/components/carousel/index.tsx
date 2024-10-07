import React, { useRef, useState } from 'react'
import { Carousel as YamadaCarousel, CarouselSlide, CarouselControl } from '@yamada-ui/carousel'
import { Button, Center, Icon, Text } from '@yamada-ui/react'

import { CirclePlay } from '@yamada-ui/lucide'
import { CirclePause } from '@yamada-ui/lucide'

/**
 * Rotation Controlを使ったCarousel
 */
const Carousel = () => {
  const controlRef = useRef<CarouselControl>(null)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  console.log('@@@@@@@@@@', isAutoPlay, '@@@@@@@@@@')

  return (
    <>
      <YamadaCarousel orientation="horizontal" autoplay={isAutoPlay} controlRef={controlRef}>
        <CarouselSlide as={Center} bg="primary">
          1
        </CarouselSlide>
        <CarouselSlide as={Center} bg="secondary">
          2
        </CarouselSlide>
        <CarouselSlide as={Center} bg="warning">
          3
        </CarouselSlide>
        <CarouselSlide as={Center} bg="danger">
          4
        </CarouselSlide>

        <Button
          variant="outline"
          colorScheme="primary"
          onClick={() => {
            setIsAutoPlay((prev) => !prev)
          }}
        >
          {isAutoPlay ? (
            <>
              <Icon as={CirclePause} />
              <Text as="span" ml={2}>
                Pause
              </Text>
            </>
          ) : (
            <>
              <Icon as={CirclePlay} />
              <Text as="span" ml={2}>
                Play
              </Text>
            </>
          )}
        </Button>
      </YamadaCarousel>
    </>
  )
}

export default Carousel
