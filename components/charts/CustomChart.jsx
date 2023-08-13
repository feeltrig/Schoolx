import React from "react";
import dynamic from "next/dynamic";
import {Center} from "@chakra-ui/react";
const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const CustomChart = (props) => {
  const {options, type} = props;

  return (
    <Center
      style={{
        width: "max-content",
        padding: "1rem",
      }}
    >
      <Chart
        options={options.options}
        series={options.series}
        type={type}
        width={500}
        height={300}
      />
    </Center>
  );
};

export default CustomChart;
