import React, { useEffect, useRef } from 'react';
const { tableau } = window;

export const Tableau = () => {
    const ref = useRef(null)
    const url = "https://prod-apnortheast-a.online.tableau.com/t/4462dataviz/views/OpeningHoursAnalysisHeatmap/Dashboard1?:origin=card_share_link&:embed=n"
    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        console.log("1")
        initViz();
    }, [])

    return (
        <div style={{ width: "50vw", height: "50vh", }}>
            <p>This is a tableau embed</p>
            <div ref={ref}></div>
        </div>
    );
}

export default Tableau;