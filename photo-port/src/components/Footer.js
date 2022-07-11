import React from 'react';
// const divStyle = { background: '#ADACB5' };
const restStyle = { background: '#2D3142' };
const singleStyle = { color: '#B0D7FF'}
export default function Footer() {
  return (
    <footer>
        <div>
        <h1 style={restStyle}>Foot</h1>
        <p>
            <a href="https://github.com/csomervil" target="_blank" rel="noreferrer" style={singleStyle}>GitHub</a>, I do not have any other profiles at the moment.
        </p>
        </div>
        
    </footer>
  );
}
