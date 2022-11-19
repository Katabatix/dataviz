import React, { useEffect, useRef } from "react";
const { tableau } = window;

export const Tableau = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    var viz;
    function initViz() {
      viz = new tableau.Viz(ref.current, url);
    }

    initViz();
    viz.show();
    // viz.setFrameSize(500, 500);
  }, [url]);

  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <p>This is a tableau embed</p>
      <div ref={ref}></div>
    </div>
  );
};

export default Tableau;
