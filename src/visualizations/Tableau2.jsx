import React, { useEffect, useRef } from "react";
const { tableau } = window;

export const Tableau2 = ({ url, height, width }) => {
  const ref = useRef(null);

  useEffect(() => {
    // var viz;

    const options = {
      hideTabs: true,
      onFirstInteractive: function () {
        console.log("ofi");
      },
      height: height,
      width: width,
    };
    function initViz() {
      new tableau.Viz(ref.current, url, options);
    }

    initViz();
  }, [height, url, width]);

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div ref={ref}></div>
    </div>
  );
};

export default Tableau2;
