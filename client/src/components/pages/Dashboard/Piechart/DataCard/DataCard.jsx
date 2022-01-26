import React from 'react';
import Piechart from '../Piechart/SodaPiechart';


function DataCard(props) {
    return ( 
    <>
        <div className="data-card">
            <div className="chart">
                <Piechart data={props.data}/>
            </div>
            <div className="legend-box">
              {props.data.map((dataPoint) => (
                <div key={dataPoint.soda} className="legend">
                  <h2 className="soda-name">{dataPoint.name}</h2>
                  <div className="color-wrapper">
                    <div className="chart-color" style={{ backgroundColor: dataPoint.hexColorCode }}></div>
                  </div>
                  <h2 className="soda-purchased">{dataPoint.purchased}</h2>
                </div>
              ))}
            </div>
            
        </div>
    </> );
}

export default DataCard;