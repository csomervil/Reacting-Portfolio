import React from 'react';

import coverImage from '../../assets/c_g_beatles.png';
export default function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "20%"}} alt="cover" />
      <div className="my-2">
        <p>
          I enjoy making music, coding, and playing video games.
        </p>
      </div>
    </section>
  );
  
  
}
