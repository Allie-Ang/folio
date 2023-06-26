import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            border: ".8px solid",
            height: "100",
            position: "absolute",
            top: 0,
            right: "0px",
            bottom: "0px",
            left: "0px",
            margin: "26px",
          }}
        >
          <h1
            style={{
              fontWeight: 245,
              marginTop: 15,
              marginLeft: 20,
              textAlign: "left",
              marginBottom: 0,
              fontSize: 37,
            }}
          >
            Allie Ang
          </h1>
          <h2
            style={{
              fontWeight: 100,
              marginLeft: 20,
              textAlign: "left",
              lineHeight: 0,
              fontSize: 15,
              marginTop: 6,
            }}
          >
            Full Stack Software Engineer
          </h2>
          <div
            style={{
              textAlign: "left",
              marginLeft: 20,
            }}
          >
            <li style={{ listStyleType: "none", marginTop: 5 }}>𓆟</li>
            <li style={{ listStyleType: "none", fontWeight: 250 }}>Projects</li>
            <li style={{ listStyleType: "none", fontWeight: 250 }}>
              <a
                href="https://www.linkedin.com/in/allison-ang-a4959093/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>
            </li>
            <li
              style={{
                listStyleType: "none",
                marginBottom: 10,
                fontWeight: 250,
              }}
            >
              <a href="https://github.com/Allie-Ang" target="_blank">
                {" "}
                GitHub
              </a>
            </li>
          </div>
          <div class="absolute">
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
