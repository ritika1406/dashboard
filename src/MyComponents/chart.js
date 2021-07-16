import React from 'react'
import { Line, defaults } from 'react-chartjs-2'


// defaults.global.tooltips.enabled = false
// defaults.global.legend.position ="bottom"


const BarChart = () =>{
    let listStyle={
        width: "75%",
        height: "25rem",
        backgroundColor: "black",
        margin: "2rem",
        border: "#00ff89",
    borderWidth: "medium",
    borderStyle: "ridge"

    }
    return <div style={listStyle}>
        
        <Line
        
           data={{
            
                    labels: ['Aug 2020', 'Nov 2020', 'Jan 2021', 'March 2021', 'May 2021', 'July 2021'],
                    datasets:[
                        {
                        label: 'Review',
                        
                        data: [12, 19, 23, 20, 30, 35],
                        backgroundColor: [
                            
                            '#a9ff00',
                        ],
                        borderColor:[
                            'blue',
                        ],
                        borderWidth: 2,
                         },
                         {
                             label: 'Hotel Response',
                             data: [60, 42, 48, 69, 59],
                             backgroundColor: 'blue',
                             borderColor: '#a9ff00',

                         }



                         ],
           }}

           height={400}
           width={600}
           options={{
                   maintainAspectRatio: false,
                   scales:{
                       yaxes:[
                           {
                               ticks:{
                                   beginAtZero: true
                               },
                           },
                       ],
                   },
                   legend: {
                       label:{
                           fontSize: 25,
                           fontColor: "white",
                           
                       }
                       
                   }
               
                }}
                    
        />
    </div>
             

        
    
}
export default BarChart