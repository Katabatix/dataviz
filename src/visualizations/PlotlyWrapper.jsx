import React from "react";
import Plot from "react-plotly.js";
const data = require("../file.json");

//rearrange into multiple traces for legend
const PlotlyWrapper = () => {
  const traceEducation = data.filter(
    (el) => el.grouped_categories_x === "Education"
  );
  const traceEntertainment = data.filter(
    (el) => el.grouped_categories_x === "Entertainment"
  );
  const traceFnB = data.filter(
    (el) => el.grouped_categories_x === "Food & Beverage"
  );
  const traceHealth = data.filter((el) => el.grouped_categories_x === "Health");
  const traceHomeRelated = data.filter(
    (el) => el.grouped_categories_x === "Home Related"
  );
  const tracePets = data.filter((el) => el.grouped_categories_x === "Pets");
  const traceReligion = data.filter(
    (el) => el.grouped_categories_x === "Religion"
  );
  const traceRetail = data.filter((el) => el.grouped_categories_x === "Retail");
  const traceServices = data.filter(
    (el) => el.grouped_categories_x === "Services"
  );
  const traceUnknown = data.filter(
    (el) => el.grouped_categories_x === "Unknown"
  );

  const legend = {
    title: {
      text: "Categories",
      font: {
        size: "17",
      },
    },
  };

  return (
    <>
      <Plot
        data={[
          extractData(traceEducation),
          extractData(traceEntertainment),
          extractData(traceFnB),
          extractData(traceHealth),
          extractData(traceHomeRelated),
          extractData(tracePets),
          extractData(traceReligion),
          extractData(traceRetail),
          extractData(traceServices),
          extractData(traceUnknown),
        ]}
        layout={{
          title: "Influential Users",
          width: "1700",
          height: "1000",
          showlegend: true,
          legend,
          xaxis: {
            title: {
              text: "# of Reviews",
              font: {
                family: "Comic Sans MS",
                size: 18,
                color: "black",
              },
            },
          },
          yaxis: {
            title: {
              text: "# of Fans",
              font: {
                family: "Comic Sans MS",
                size: 18,
                color: "black",
              },
            },
          },
        }}
        config={{ scrollZoom: true, responsive: true }}
      />
    </>
  );
};

const extractData = (data) => {
  if (data.length !== 0) {
    const cat = data[0].grouped_categories_x;
    const xData = data.map((d) => d.numReviews);
    const yData = data.map((d) => d.fans_x);
    const textData = data.map(
      (d) =>
        `${d.name_y_x}<br> fans: ${d.fans_x} <br> reviews: ${d.numReviews} <br> useful: ${d.useful}`
    );
    const sizeData = data.map((d) => d.useful);
    const colorData = categoryColorMapping(cat);
    return {
      x: xData,
      y: yData,
      text: textData,
      marker: {
        color: colorData,
        size: sizeData,
        sizeref: (2.0 * Math.max(...sizeData)) / 50 ** 2,
        sizemode: "area",
      },
      mode: "markers",
      name: cat,
    };
  } else return {};
};

const categoryColorMapping = (category) => {
  switch (category) {
    case "Education":
      return "#4e79a7";
    case "Entertainment":
      return "#f28e2b";
    case "Food & Beverage":
      return "#e15759";
    case "Health":
      return "#76b7b2";
    case "Home Related":
      return "#59a14f";
    case "Pets":
      return "#59a14f";
    case "Religion":
      return "#59a14f";
    case "Retail":
      return "#59a14f";
    case "Services":
      return "#59a14f";
    case "Unknown":
      return "#bab0ac";
    default:
      return "#bab0ac";
  }
};

export default PlotlyWrapper;
