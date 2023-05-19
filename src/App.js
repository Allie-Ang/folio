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
          <h1 style={{ fontWeight: 100 }}>Allie Ang</h1>
          <h2 style={{ fontWeight: 100 }}>Full Stack Software Engineer</h2>
          <div>
            <li>Projects</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
