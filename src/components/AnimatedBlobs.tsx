
import React from 'react';

const AnimatedBlobs = () => {
  return (
    <>
      <div className="purple-blob w-[600px] h-[600px] top-[-150px] right-[-200px] opacity-70"></div>
      <div
        className="purple-blob w-[700px] h-[700px] top-[30%] left-[-350px] opacity-60"
        style={{ animationDelay: '3s' }}
      ></div>
      <div
        className="purple-blob w-[500px] h-[500px] bottom-[10%] right-[-250px] opacity-65"
        style={{ animationDelay: '6s' }}
      ></div>
      <div
        className="purple-blob w-[300px] h-[300px] top-[60%] left-[10%] opacity-50"
        style={{ animationDelay: '8s' }}
      ></div>
    </>
  );
};

export default AnimatedBlobs;
