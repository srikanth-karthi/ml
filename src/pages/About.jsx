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
      customers: 10,
      projects: 15,
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
                Mindlap Architects, established in 2019, is an architecture and interior design practice founded by Ar. Chella Priyanka and Ar. Ponkavi.
              </p>

              <p>
                We believe architecture and interior design are not just about creating spaces, but about understanding people, purpose, and context. Every project we take up—regardless of scale—is approached with the same level of care, responsibility, and attention to detail.
              </p>

              <p>
                Our design process begins with a deep understanding of the site, client requirements, and way of living or working. We strongly believe in site-responsive design, allowing each project to evolve naturally rather than forcing a fixed style. This approach helps us create spaces that are practical, comfortable, and meaningful.
              </p>

              <p>
                At Mindlap Architects, we work closely with our clients at every stage of the project. From concept development to detailed design and execution support, we ensure clear communication, smooth coordination, and informed decision-making. Our friendly and approachable working style helps build trust and makes the overall journey comfortable and transparent.
              </p>
              <p>
                At Mindlap Architects, we aim to create thoughtful spaces that feel natural, function effortlessly, and stand the test of time.
              </p>

              <p className="closing">
                We design with understanding, responsibility, and heart.
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
              <h3 className="expertise-heading">MASTER PLANNING</h3>
              <ul className="expertise-list">
                <li>Institutional</li>
                <li>Multi storied Housing & Villas</li>
                <li>Hospitality</li>
                <li>Infrastructure</li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">02</div>
              <h3 className="expertise-heading">ARCHITECTURAL DESIGN</h3>
              <ul className="expertise-list">
                <li>Residential</li>
                <li>Educational</li>
                <li>Commercial</li>
                <li>Hospitals</li>
                <li>Religious</li>
                <li>Industrial</li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">03</div>
              <h3 className="expertise-heading">INTERIOR DESIGN</h3>
              <ul className="expertise-list">
                <li>Corporate Offices</li>
                <li>High end Villas</li>
                <li>Institutional</li>
                <li>Furniture Design</li>
              </ul>
            </div>

            <div className="expertise-card">
              <div className="expertise-number">04</div>
              <h3 className="expertise-heading">DESIGN & BUILD</h3>
              <ul className="expertise-list">
                <li>Corporate Offices</li>
                <li>Luxury Houses</li>
                <li>Hospitality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
