import React from 'react';

import coverImage from '../../assets/c_g_beatles.png';
export default function About() {
  return (
    <section className="my-5">
      <img src={coverImage} className="my-2" style={{ width: "20%"}} alt="cover" />
      <div className="my-2">
        <p>
          I enjoy making music, coding, and playing video games. I also like Lorem Ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </section>
  );
  
  
}
