import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Developer", "Data Scientist", "Data Engineer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 100
        }}
      />
    </>
  );
};
