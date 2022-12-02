import logo from './logo.svg';
import { useState } from "react";
import ReactDOM from 'react-dom';
import App from './App'
import Count from './click'
import './App.css';

function Dash() {
  let onTimesup = () => {
    alert('time up')
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  return (
    
    <div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">

      <a name="" id="" onClick={handleSubmit} class="btn btn-primary " href="#" role="button">Exit</a>
    </form>
  </div>
</nav>
 
<Count onTimesup={onTimesup}
              duration={600}/>
            
          
 </div>

  );
}

export default Dash;
