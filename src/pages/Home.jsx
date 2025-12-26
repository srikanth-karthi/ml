import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    `${import.meta.env.BASE_URL}images/01.jpg`,
    `${import.meta.env.BASE_URL}images/02.jpg`,
    `${import.meta.env.BASE_URL}images/03.jpg`,
    `${import.meta.env.BASE_URL}images/04.jpg`
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentImage(index)
  }

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
