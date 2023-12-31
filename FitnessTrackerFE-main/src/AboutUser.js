import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Header from "./header";

const AboutUser = ()=> {
let data = []



  const state = {
    dataLine: {
      labels: localStorage.getItem("date") && localStorage.getItem("date") !=="undedined" ? JSON.parse(localStorage.getItem("date")) : [],
      datasets: [
        {
          label: "Burnt Calories Stats",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data : localStorage.getItem("Calories") && localStorage.getItem("date") !=="undedined" ? JSON.parse(localStorage.getItem("Calories")) : []
        }
      ]
    }
  }


    return (
      <>
      <Header />
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
      </>
    );
  
}


export default AboutUser;
