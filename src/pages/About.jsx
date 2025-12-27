import { useState, useEffect, useRef } from 'react'
import './About.css'

function About() {
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    districts: 0
  })

  const [hasAnimated, setHasAnimated] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const statsRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    const currentStatsRef = statsRef.current

    if (currentStatsRef) {
      observer.observe(currentStatsRef)
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsTextVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const currentTextRef = textRef.current

    if (currentTextRef) {
      observer.observe(currentTextRef)
    }

    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef)
      }
    }
  }, [])

  const animateCounters = () => {
    const targets = {
      years: 6,
      customers: 15,
      projects: 20,
      districts: 5
    }

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        years: Math.floor(targets.years * progress),
        customers: Math.floor(targets.customers * progress),
        projects: Math.floor(targets.projects * progress),
        districts: Math.floor(targets.districts * progress)
      })

      if (step >= steps) {
        setCounters(targets)
        clearInterval(timer)
      }
    }, interval)
  }

  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={`${import.meta.env.BASE_URL}images/about.png`} alt="About Mindlap Architects" className="about-hero-image" />
      </div>

      <div className="about-content">
        <div className="about-columns">
          <div className="about-left" ref={statsRef}>
            <h2 className="about-heading">ABOUT US</h2>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{counters.years}+</div>
                <div className="stat-label">years experience</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">{counters.customers}+</div>
                <div className="stat-label">Happy customers</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">{counters.projects}+</div>
                <div className="stat-label">completed projects</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">{counters.districts}+</div>
                <div className="stat-label">districts</div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <h1 className={`company-name ${isTextVisible ? 'slide-in' : ''}`}>Mindlap Architects</h1>

            <div ref={textRef} className={`about-text ${isTextVisible ? 'fade-in' : ''}`}>
              <p>
               <span className="architects-names">Mindlap Architects</span>  established in 2019, is an architecture and interior design practice founded by <span className="architects-names">Ar. Chella Priyanka</span> and <span className="architects-names">Ar. Ponkavi.</span>
              </p>

              <p>
                We believe design goes beyond spaces—it begins with understanding people, purpose, and context. Our site-responsive approach allows each project to evolve naturally, resulting in practical, comfortable,
and meaningful spaces.
              </p>

              <p>
Working closely with clients from concept to execution, we ensure clear communication, smooth coordination, and thoughtful outcomes that stand the test of time.
              </p>


              <p className="closing">
The mastermind of your thoughts
              </p>
            </div>
          </div>
        </div>

        <div className="expertise-section">
          <div className="expertise-header">
            <p className="expertise-subtitle">WHAT WE DO</p>
            <h2 className="expertise-title">Our Expertise</h2>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-number">01</div>
              <h3 className="expertise-heading">Architectural Design</h3>
              <p className="expertise-description">Site-responsive and functional architecture tailored to people and purpose.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">02</div>
              <h3 className="expertise-heading">Interior Design</h3>
              <p className="expertise-description">Thoughtful interiors focused on comfort, clarity, and everyday usability.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">03</div>
              <h3 className="expertise-heading">Design + Build</h3>
              <p className="expertise-description">End-to-end design and execution for seamless coordination and delivery.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">04</div>
              <h3 className="expertise-heading">Landscape Design</h3>
              <p className="expertise-description">Simple, functional outdoor spaces that complement the built environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
