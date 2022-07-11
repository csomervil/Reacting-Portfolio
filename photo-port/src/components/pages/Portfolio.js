import React from 'react';
import Image0 from '../../assets/project1.png';
import Image1 from '../../assets/project1.3.png';
import Image2 from '../../assets/project2.png';
import Image3 from '../../assets/project2.5.png';
import Image4 from '../../assets/project3.png';
import Image5 from '../../assets/project5.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Click on the images of prior deployed appications to go to their respective github pages.
      </p>
      <h3>
        Horiseon-Homepage-and-Information-Center
      </h3>
      <a href="https://github.com/csomervil/Horiseon-Homepage-and-Information-Center" target="_blank" rel="noreferrer">
      <img src={Image0} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
      <div>

      </div>
      <h3>
        Portfolio-of-Projects-and-Information
      </h3>
      <a href="https://github.com/csomervil/Portfolio-of-Current-Projects-and-Information" target="_blank" rel="noreferrer">
      <img src={Image1} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
      <div>
        
      </div>
      <h3>
        Fundamental-Javascript-Coding-Quiz
      </h3>
      <a href="https://github.com/csomervil/Fundamental-Javascript-Coding-Quiz" target="_blank" rel="noreferrer">
      <img src={Image2} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
      <div>
        
      </div>
      <h3>
        Daily-Work-Day-Scheduling-Application
      </h3>
      <a href="https://github.com/csomervil/Daily-Work-Day-Scheduling-Application" target="_blank" rel="noreferrer">
      <img src={Image3} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
      <div>
        
      </div>
      <h3>
        Weather-Teller
      </h3>
      <a href="https://github.com/csomervil/Weather-Teller" target="_blank" rel="noreferrer">
      <img src={Image4} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
      <div>
        
      </div>
      <h3>
        Blog-us
      </h3>
      <a href="https://github.com/csomervil/Blog-us" target="_blank" rel="noreferrer">
      <img src={Image5} className="my-2" style={{ width: "20%"}} alt="cover" />
      </a>
    </div>
  );
}
