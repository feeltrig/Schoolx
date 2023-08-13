import React from "react";
import CustomChart from "../components/charts/CustomChart";

const teacherPerformance = () => {
  const options = {
    series: [
      {
        name: "sales",
        data: [
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/04/01",
            y: 430,
          },
          {
            x: "2019/07/01",
            y: 448,
          },
          {
            x: "2019/10/01",
            y: 470,
          },
          {
            x: "2020/01/01",
            y: 540,
          },
          {
            x: "2020/04/01",
            y: 580,
          },
          {
            x: "2020/07/01",
            y: 690,
          },
          {
            x: "2020/10/01",
            y: 690,
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
