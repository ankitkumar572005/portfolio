import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Foodies Travel Map",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript. Features: Interactive UI, organized location display",
    image: "/images/foodies_travel_map.png",
    github: "https://github.com/vedbhadani/Foodies-Travel-Map"
  },
  {
    title: "Catch Falling Object Game",
    category: "Browser Game",
    tools: "JavaScript, HTML, CSS. Features: Real-time gameplay, score tracking",
    image: "/images/falling_object_game.png",
    github: "https://github.com/AkkiKrsingh2005/catch-falling-object"
  },
  {
    title: "PokePo",
    category: "Interactive Web App",
    tools: "JavaScript, HTML, CSS. Features: Dynamic content, API data fetching",
    image: "/images/pokepo_app.png",
    github: "https://github.com/AkkiKrsingh2005/PokePo"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" style={{color: '#fff', marginTop: '10px', display: 'inline-block', textDecoration: 'underline'}}>🔗 View on GitHub</a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.image ? <WorkImage image={project.image} alt={project.title} /> : <div style={{width: '100%', height: '100%', background: '#222', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888'}}>No Image Available</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
