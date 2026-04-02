import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI RAG Navigator",
    category: "LLM & RAG Application",
    description: "An enterprise-grade document chat system using Retrieval-Augmented Generation. Upload PDFs and have intelligent, context-aware conversations powered by Google Gemini.",
    tags: ["LangChain v0.3", "Gemini 1.5 Flash", "ChromaDB", "Streamlit", "Python 3.12"],
    image: "/images/rag_navigator.png",
    github: "https://github.com/AkkiKrsingh2005/ai-rag-navigator",
    demo: "https://akkikrsingh2005-ai-rag-navigator-app-5gfm3y.streamlit.app/",
    pinned: true,
    color: "from-violet-500 to-cyan-400"
  },
  {
    title: "Plant Health Vision",
    category: "Computer Vision & Deep Learning",
    description: "A production-ready CNN-based application that detects 20+ plant diseases in real-time. Delivers instant diagnosis and actionable care recommendations.",
    tags: ["TensorFlow 2.21", "MobileNetV2", "OpenCV", "Streamlit", "Python 3.13"],
    image: "/images/plant_health.png",
    github: "https://github.com/AkkiKrsingh2005/plant-health-vision",
    demo: "https://akkikrsingh2005-plant-health-vision-app-cuhriy.streamlit.app/",
    pinned: true,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "AI Gesture OS Control",
    category: "Human-Computer Interaction (HCI)",
    description: "A real-time HCI system that maps hand landmarks to OS-level controls. Features sub-20ms latency cursor tracking and pinch-to-click gesture recognition.",
    tags: ["MediaPipe Tasks API", "OpenCV", "PyAutoGUI", "Apple M3 Optimized"],
    image: "/images/gesture_control.png",
    github: "https://github.com/AkkiKrsingh2005/ai-gesture-os-control",
    demo: null,
    pinned: true,
    color: "from-orange-500 to-rose-400"
  },
  {
    title: "Foodies Travel Map",
    category: "Web Application",
    description: "An interactive web app for discovering and mapping food destinations with an intuitive, location-driven UI.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/foodies_travel_map.png",
    github: "https://github.com/vedbhadani/Foodies-Travel-Map",
    demo: null,
    pinned: false,
    color: "from-yellow-500 to-orange-400"
  },
  {
    title: "Catch Falling Object",
    category: "Browser Game",
    description: "A real-time browser game with dynamic object spawning, score tracking, and increasing difficulty.",
    tags: ["JavaScript", "HTML Canvas", "CSS"],
    image: "/images/falling_object_game.png",
    github: "https://github.com/AkkiKrsingh2005/catch-falling-object",
    demo: null,
    pinned: false,
    color: "from-blue-500 to-indigo-400"
  },
  {
    title: "PokePo",
    category: "Interactive Web App",
    description: "A dynamic Pokémon explorer with live API data-fetching, search, and interactive card animations.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    image: "/images/pokepo_app.png",
    github: "https://github.com/AkkiKrsingh2005/PokePo",
    demo: null,
    pinned: false,
    color: "from-pink-500 to-red-400"
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
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
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
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable">
            <MdArrowBack />
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable">
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((proj, index) => (
                <div className="carousel-slide" key={index}>
                  <div className={`carousel-content ${proj.pinned ? "is-pinned" : ""}`}>
                    {/* Left Info Panel */}
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        {proj.pinned && (
                          <div className="pinned-badge">
                            <span className="pinned-dot"></span>
                            Featured AI/ML Project
                          </div>
                        )}
                        <h4>{proj.title}</h4>
                        <p className="carousel-category">{proj.category}</p>
                        <p className="carousel-description">{proj.description}</p>

                        {/* Tech Tags */}
                        <div className="tech-tags">
                          {proj.tags.map((tag, i) => (
                            <span key={i} className="tech-tag">{tag}</span>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="cta-buttons">
                          {proj.github && (
                            <a href={proj.github} target="_blank" rel="noreferrer" className="cta-btn cta-btn-outline">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                              GitHub
                            </a>
                          )}
                          {proj.demo && (
                            <a href={proj.demo} target="_blank" rel="noreferrer" className="cta-btn cta-btn-primary">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Image Panel */}
                    <div className="carousel-image-wrapper">
                      {proj.pinned && <div className={`image-glow-border gradient-${index}`}></div>}
                      {proj.image
                        ? <WorkImage image={proj.image} alt={proj.title} />
                        : <div className="no-image-placeholder">No Preview Available</div>
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators with pinned indicator */}
          <div className="carousel-dots">
            {projects.map((proj, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""} ${proj.pinned ? "carousel-dot-pinned" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
                title={proj.title}
              />
            ))}
          </div>
          <p className="carousel-legend">⭐ First 3 dots = Featured AI/ML Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
