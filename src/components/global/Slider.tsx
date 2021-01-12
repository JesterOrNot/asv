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
  images = [
    {
      src: "/",
      text: "Hello",
    },
  ]
  const [image, setImage] = useState(images[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const changeImage = () =>
      setIndex(index !== images.length - 1 ? index + 1 : 0)

    setImage(images[index])
    const timeout = setTimeout(changeImage, 3000)

    return () => clearTimeout(timeout)
  }, [index, images])

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
