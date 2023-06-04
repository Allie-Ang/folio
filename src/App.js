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
            <li style={{ listStyleType: "none", fontWeight: 250 }}>LinkedIn</li>
            <li
              style={{
                listStyleType: "none",
                marginBottom: 10,
                fontWeight: 250,
              }}
            >
              GitHub
            </li>
          </div>
          <div style={{ border: "1px solid yellow" }}>
            <p style={{ fontSize: "15px", lineHeight: "20px" }}></p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
