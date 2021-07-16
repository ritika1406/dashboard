import React from 'react'
import PropTypes from 'prop-types'


export default function Header() {
     let headerStyle={
         marginBottom: "2rem",
         fontStyle: "oblique",
         fontFamily: "cursive",
     }
    return (
        
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  style={headerStyle}>
       <div className="container-fluid">
    
        <a className="navbar-brand" href="#">Welcome to Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Response Vs Hotel Response</a>
              </li>
              </ul>
              </div>
          
            
            
  </div>
</nav>  
        
    )
}
Header.defaultProps = {
  title: "Your Title Here"
}
Header.propTypes = {
  title: PropTypes.string
}