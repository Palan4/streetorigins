import React, { Component } from "react";
import Chart from "react-google-charts";

const StreetOrigins = props => (
  <div className="chart origins">
    <Chart
      width={"600px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={props.data}
      options={{
        title: "Name Origin",
        fontName: "Raleway",
        backgroundColor: "transparent",
        pieHole: 0.6,
        pieSliceText: "none",
        titleTextStyle: {
          fontSize: 24,
          color: "#777"
        }
      }}
      rootProps={{ "data-testid": "3" }}
    />
  </div>
);

export default StreetOrigins;
