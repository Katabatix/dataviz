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
  }, [url]);

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div ref={ref}></div>
    </div>
  );
};

export default Tableau;
