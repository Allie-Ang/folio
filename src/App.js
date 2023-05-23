import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            border: "1px solid",
            height: "100",
            position: "absolute",
            top: 0,
            right: "0px",
            bottom: "0px",
            left: "0px",
            margin: "26px",
          }}
        >
          <div style={{ border: "1px solid yellow" }}>
            <h1 style={{ fontWeight: 200 }}>Allie Ang</h1>
            <h2 style={{ fontWeight: 100 }}>Full Stack Software Engineer</h2>
          </div>
          <div style={{ border: "1px solid yellow" }}>
            <li style={{ listStyleType: "none" }}>Projects</li>
            <li style={{ listStyleType: "none" }}>LinkedIn</li>
            <li style={{ listStyleType: "none" }}>GitHub</li>
          </div>
          <div style={{ border: "1px solid yellow" }}>
            <p style={{ fontSize: "15px", lineHeight: "20px" }}>
              I’m an ambitious software engineer with a background in
              occupational therapy, seeking opportunities to leverage both
              therapeutic and technical skills in a new role. Following
              non-traditional education paths, I completed the Full-Stack
              Software Engineer Program @ UCLA and Stanbridge University
              receiving my degree in Occupational Therapy.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
