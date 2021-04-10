import React, {Fragment,useEffect, useState} from "react";

const Stock = () =>{

  const getAAPL = async () => {
    try {
      const response = await fetch("http://localhost:5000/AAPL");
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getAAPL();
  },[]);

  return(
    <Fragment>
      {" "}
      <table>
        <thead>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
      </table>
    </Fragment>
  )
}


export default Stock;