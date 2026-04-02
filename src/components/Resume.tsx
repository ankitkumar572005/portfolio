import "./styles/Resume.css";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-section section-container" id="resume">
      <div className="resume-section-header">
        <h2>My <span>Resume</span></h2>
        <button className="resume-download-btn" onClick={handlePrint} data-cursor="disable">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume Card */}
      <div className="resume-card" id="resume-printable">

        {/* Header */}
        <div className="resume-header">
          <div className="resume-name-block">
            <h1>Ankit Kumar</h1>
            <p className="resume-tagline">Aspiring AI/ML Engineer · B.Tech CS (AI/ML)</p>
          </div>
          <div className="resume-contact-block">
            <a href="mailto:ak508887@gmail.com">ak508887@gmail.com</a>
            <a href="https://github.com/AkkiKrsingh2005" target="_blank" rel="noreferrer">github.com/AkkiKrsingh2005</a>
            <a href="https://www.linkedin.com/in/ankit-kumar-821003327/" target="_blank" rel="noreferrer">linkedin.com/in/ankit-kumar-821003327</a>
            <a href="https://portfolio-plum-nine-v2kb4jyv8c.vercel.app/" target="_blank" rel="noreferrer">portfolio-plum-nine-v2kb4jyv8c.vercel.app</a>
          </div>
        </div>

        <div className="resume-divider"></div>

        {/* Two Column Layout */}
        <div className="resume-body">

          {/* Left Column */}
          <div className="resume-left">

            {/* Education */}
            <div className="resume-block">
              <h3 className="resume-block-title">Education</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">B.Tech in Computer Science (AI/ML)</span>
                  <span className="resume-item-date">2024 – Present</span>
                </div>
                <span className="resume-item-sub">Newton School of Technology</span>
                <p>Currently in 4th Semester. Coursework includes AI/ML, Data Structures & Algorithms, DBMS, Advanced Programming, and Data Visualization.</p>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-block">
              <h3 className="resume-block-title">Projects</h3>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">AI RAG Navigator</span>
                  <a href="https://akkikrsingh2005-ai-rag-navigator-app-5gfm3y.streamlit.app/" target="_blank" rel="noreferrer" className="resume-live-link">Live ↗</a>
                </div>
                <span className="resume-item-sub">LangChain v0.3 · Gemini 1.5 Flash · ChromaDB · Streamlit · Python 3.12</span>
                <p>Enterprise-grade RAG application enabling context-aware PDF conversations using Modern LCEL architecture with History-Aware Retrievers and vector embeddings.</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">Plant Health Vision</span>
                  <a href="https://akkikrsingh2005-plant-health-vision-app-cuhriy.streamlit.app/" target="_blank" rel="noreferrer" className="resume-live-link">Live ↗</a>
                </div>
                <span className="resume-item-sub">TensorFlow 2.21 · MobileNetV2 · OpenCV · Streamlit · Python 3.13</span>
                <p>CNN-based plant disease detection system classifying 20+ diseases across 5 crop types with real-time inference and actionable care recommendations.</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">AI Gesture OS Control</span>
                  <a href="https://github.com/AkkiKrsingh2005/ai-gesture-os-control" target="_blank" rel="noreferrer" className="resume-live-link">GitHub ↗</a>
                </div>
                <span className="resume-item-sub">MediaPipe Tasks API · OpenCV · PyAutoGUI · Apple M3 Optimized</span>
                <p>Real-time HCI system using hand landmarks for OS-level cursor control with sub-20ms latency and pinch-to-click gesture detection using motion smoothing algorithms.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="resume-right">

            {/* Summary */}
            <div className="resume-block">
              <h3 className="resume-block-title">Summary</h3>
              <p className="resume-summary">
                Aspiring AI/ML Engineer in 4th semester with a strong foundation in Python, deep learning, and LLM application development. Built and deployed 3 production AI/ML applications. Passionate about solving real-world problems with data and actively seeking AI/ML internship opportunities.
              </p>
            </div>

            {/* Skills */}
            <div className="resume-block">
              <h3 className="resume-block-title">Technical Skills</h3>
              <div className="resume-skills">
                <div className="skill-group">
                  <span className="skill-label">Languages</span>
                  <div className="skill-tags">
                    <span>Python</span><span>JavaScript</span><span>TypeScript</span><span>SQL</span>
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-label">AI / ML</span>
                  <div className="skill-tags">
                    <span>TensorFlow</span><span>LangChain</span><span>MediaPipe</span><span>Pandas</span><span>NumPy</span>
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-label">Web & Tools</span>
                  <div className="skill-tags">
                    <span>Streamlit</span><span>HTML</span><span>CSS</span><span>React</span><span>Git</span>
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-label">Databases</span>
                  <div className="skill-tags">
                    <span>ChromaDB</span><span>MySQL</span><span>MongoDB</span>
                  </div>
                </div>
                <div className="skill-group">
                  <span className="skill-label">Core CS</span>
                  <div className="skill-tags">
                    <span>DSA</span><span>DBMS</span><span>OOP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="resume-block">
              <h3 className="resume-block-title">Achievements</h3>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">Open Source Contributor</span>
                </div>
                <p>Contributed <strong>35+ Pull Requests</strong> to major open-source projects including Vue.js, React Native, and Webpack. Focused on documentation improvements and core bug fixes.</p>
              </div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-item-title">Hackathon Participant</span>
                  <span className="resume-item-date">NST</span>
                </div>
                <p>Developed a full game from scratch in a team-based hackathon at Newton School of Technology, demonstrating rapid prototyping and collaboration skills.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
