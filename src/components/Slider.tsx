import React, { useEffect, useState } from "react"
// @ts-ignore
import { animated, useTransition, config } from "react-spring"

export type Image = {
  src: string
  text: string
}

export type SliderProps = {
  images: Image[]
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [image, setImage] = useState(images[0])
  const [index, setIndex] = useState(0)

  //   const imageAnimation

  const changeImage = () => {
    let newIndex = 0

    if (index !== images.length - 1) {
      newIndex = index + 1
    }

    setIndex(newIndex)
  }

  useEffect(() => {
    setImage(images[index])
    setTimeout(changeImage, 3000)
  }, [index])

  const transitions = useTransition(image, (item) => item.src, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  return (
    <div className="slider">
      {/* <animated.img src={image.src} /> */}
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          className="slide-img"
          style={{
            ...props,
            backgroundImage: `url(${item.src})`,
          }}
        />
      ))}
      <div className="slider--content">
        <div className="slider--feature">
          <h1>{image.text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Slider
