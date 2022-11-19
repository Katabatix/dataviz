import React, { useEffect, useRef } from "react";
const { tableau } = window;

export const Tableau2 = ({ url, height, width }) => {
  const ref = useRef(null);

  const options = {
    hideTabs: true,
    onFirstInteractive: function () {
      console.log("ofi");
    },
    height: height,
    width: width,
  };

  useEffect(() => {
    var viz;
    function initViz() {
      viz = new tableau.Viz(ref.current, url, options);
    }

    initViz();
  }, [url]);

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div ref={ref}></div>
    </div>
  );
};

export default Tableau2;
