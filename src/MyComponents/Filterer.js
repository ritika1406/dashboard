import React from 'react'


export const Filterer = () => {
    let filStyle={
        padding: "2rem",
        
        backgroundColor: "#bb8f8f",

    }
    return (
        <div style={filStyle}>
            
        {/* <button onClick="filterValue(4)">Filtered Data</button> */}
        <h3>Filtering data</h3>
  <div className="btn-group">
  <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Last  month
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Last 2 month</a></li>
    <li><a className="dropdown-item" href="#">Last 3 month</a></li>
    <li><a className="dropdown-item" href="#">Last year</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Last 2 year</a></li>
  </ul>
</div>
      
        </div>
        
            // const filteredData = data.filter(function(num){
            //     return num > condition;
            // });
            // document.getElementbyId(filteredData);
        
        
    )
}
