'use client'

import React from 'react';

function Homepage() {
  return (
    <div >
      <button onClick={async ()=>{
        const res = await fetch('/api/send',{
          method: 'POST'
        })
        const data = await res.json();
        console.log(data);
        
      }} >
        Enviar email 
      </button>
    </div>
  );
}

export default Homepage;
