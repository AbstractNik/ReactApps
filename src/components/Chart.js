import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
 const dataPointValues=   props.datapoints.map((datapointelement) => {

    return datapointelement.value;
        
 });
   // console.log(dataPointValues);
    
    const maxValue = Math.max(...dataPointValues);
 //   console.log(maxValue);
    return <div className="chart">{props.datapoints.map((datapoint) => {

        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxValue}
            label={datapoint.label}
          ></ChartBar>
        );
           
       })}</div>;
    
};

export default Chart;
