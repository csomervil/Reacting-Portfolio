import React from 'react';
import resumeLink from '../../assets/resume.txt';
document.body.style = 'background: #2D3142;';
const divStyle = { color: '#B0D7FF'};
export default function Resume() {
  return (
    <body>
    <div style={divStyle}>
      <h1>Resume</h1>
      <p>
      <a style={divStyle} href={resumeLink} download>
        Link to downloadable resume:
      </a>
      </p>
      <p>
      Proficiencies:
      <li>
        Working with python
      </li>
      <li>
        Arithmetic/problem solving
      </li>
      <li>
        Creative writing
      </li>
      <li>
        Audio production
      </li>
      </p>
    </div>
    </body>
  );
}
