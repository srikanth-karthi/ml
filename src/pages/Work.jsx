import { useState } from 'react'
import './Work.css'

function Work() {
  const projects = [
    {
      name: 'Kay House',
      folder: 'Kay House',
      imageCount: 30
    },
    {
      name: 'Vilvam Restaurant',
      folder: 'Vilvam Restaurant',
      imageCount: 10
    },
    {
      name: 'Amelia Aesthetic Studio',
      folder: 'Amelia Aesthetic Studio',
      imageCount: 8
    },
    {
      name: 'Guhan Dental Clinic',
      folder: 'Guhan Dental Clinic',
      imageCount: 6
    },
    {
      name: 'Mangai Boutiques',
      folder: 'Mangai Boutiques',
      imageCount: 6
    },
    {
      name: "Aravind's Residence",
      folder: 'Aravind_s Residence',
      imageCount: 2
    },
    {
      name: 'Sandeep Office Space',
      folder: 'Sandeep Office Space',
      imageCount: 2
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const getProjectImages = (project) => {
    const images = []
    for (let i = 1; i <= project.imageCount; i++) {
      const imageNum = i.toString().padStart(2, '0')
      images.push(`${import.meta.env.BASE_URL}images/projects/${project.folder}/${imageNum}.jpg`)
    }
    return images
  }

  return (
    <div className="work-page">
      <div className="work-header">
        <h1 className="work-title">Our Work</h1>
        <p className="work-subtitle">Explore our portfolio of architectural excellence</p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="work-item"
            onClick={() => openProject(project)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/projects/${project.folder}/01.jpg`}
              alt={project.name}
              loading="lazy"
            />
            <div className="work-overlay">
              <span className="project-name">{project.name}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProject}>×</button>
            <h2 className="modal-title">{selectedProject.name}</h2>

            <div className="project-gallery">
              {getProjectImages(selectedProject).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${selectedProject.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Work
