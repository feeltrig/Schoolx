import React from "react";
import CustomChart from "../../components/charts/CustomChart";

const teacherPerformance = () => {
  const options = {
    series: [
      {
        name: "sales",
        data: [
          {
            x: "2018",
            y: 400,
          },
          {
            x: "2019",
            y: 430,
          },
          {
            x: "2020",
            y: 448,
          },
        ],
      },
    ],
    options: {
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ["Actual"],
        markers: {
          fillColors: ["#00E396"],
        },
      },
      chart: {
        type: "bar",
        parentHeightOffset: 0,

        background: "white",
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "category",
      },
      title: {
        text: "Grouped Labels on the X-axis",
      },
    },
  };
  return (
    <div>
      <CustomChart options={options} type={"bar"} />
    </div>
  );
};

export default teacherPerformance;
