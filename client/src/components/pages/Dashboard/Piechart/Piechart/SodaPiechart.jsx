import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default class SodaPieChart extends React.PureComponent {
  constructor(props){
    super(props);
    
    console.log(props);
  }
  
  render() {
    return (
      <ResponsiveContainer className='piechart-wrapper'>
        <PieChart width={800} height={300} onMouseEnter={this.onPieEnter}>
          <Pie
            data={this.props.data}
            cx={this.props.width / 2}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="purchased"
            className='piechart'
          >
            {this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={this.props.data[index % 4].color} />
              // {COLORS[index % COLORS.length]}
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    );
  }
}