import React from "react";
import Highcharts from "highcharts/highstock";
import highchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);

const getOptions = (fuelType, data) => {
  const displayPrice =
    fuelType === "diesel" ? data?.dieselPrice : data?.petrolPrice;
  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: 400,
      width: 400,
    },
    title: {
      text: `${data?.cityState} - ${fuelType?.toUpperCase()}
            
            as of ${data?.priceDate}`,
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
    },
    // the value axis
    yAxis: {
      min: 0,
      max: 140,
      title: {
        text: "INR/Litre",
      },
      plotBands: [
        {
          from: 0,
          to: 60,
          color: "#55BF3B", // green
        },
        {
          from: 61,
          to: 85,
          color: "#DDDF0D", // yellow
        },
        {
          from: 86,
          to: 140,
          color: "#DF5353", // red
        },
      ],
    },
    scrollbar: {
      enabled: false,
    },
    rangeSelector: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
    series: [
      {
        name: `${fuelType} price`,
        data: [+displayPrice || 0],
        tooltip: {
          valueSuffix: " \u20B9/Litre",
        },
      },
    ],
  };
  return options;
};

const FuelMeter = ({ fuelType, data }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={getOptions(fuelType, data)}
      constructorType={"stockChart"}
    />
  );
};
export default FuelMeter;
