import React, { useEffect, useRef } from 'react';
const { tableau } = window;

export const Tableau = () => {
    const ref = useRef(null)
    const url = "http://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard"
    function initViz() {
        new tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        console.log("1")
        initViz();
    }, [])

    return (
        <div>
            <p>This is a tableau embed</p>
            <div ref={ref}></div>
        </div>
    );
}

export default Tableau;