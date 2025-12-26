import { useState, useEffect } from 'react'
import './Product.css'

function Product() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="product-page">
      <div className="product-content">
        <h3 className={`product-subtitle ${isVisible ? 'fade-in-top' : ''}`}>
          WE ARE
        </h3>

        <h1 className={`product-title ${isVisible ? 'scale-in' : ''}`}>
          LAUNCHING
          <br />
          SOON!
        </h1>

        <p className={`product-tagline ${isVisible ? 'fade-in-bottom' : ''}`}>
          STAY TUNED
        </p>

        <div className={`product-decoration ${isVisible ? 'draw-line' : ''}`}>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default Product
