import logo from './logo.svg';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Count from './count'
import Dash from './dashboard'

import './App.css';

function App() {
  
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name=='123'){
      ReactDOM.render(<Dash />, document.getElementById('root'));
    }else{
      alert("password incorrect")
    }
    
    
  }
  let onTimesup = () => {
    alert('time up')
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
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div className="row">
    <style dangerouslySetInnerHTML={{__html: "\n      section{\n        position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n      }\n      section::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: lightgoldenrodyellow;\n}\n  " }} />
    <div style={{border: 'solid 7px', borderColor: '#6bcfcf', background: 'rgba(0, 0, 0, 0.5)', width: '49%', marginRight: 1, height: '92vh'}}>
      <div className="container">
        <div className="container-fluid ml-4">
          <div className="mt-5">
            <h1>java</h1>
            <p>This course is provisioned by <b>Nexxt Labs</b></p>
          </div>
          <ul>
            <li>Labs</li>
            <li>Exercises</li>
            <li>Do it Yourself</li> 
          </ul>
          <div className="row">
            <style dangerouslySetInnerHTML={{__html: "\n                      ul{\n                          display: flex;\n        \n                      }\n                      h1,h2,h3,h4,b,label{\n                          color: white;\n                      }\n                      ul li{\n                          margin-right: 40px;\n                          color: #6bcfcf;\n                      }\n                      .span{\n                          border: solid 1px;\n                   padding: 20px 20px 20px 20px;\n                                     /* padding-left: 50px;\n                                     padding-right: 50px;\n                                     padding-bottom: 10px; */\n                                   \n                      }\n                      body{\n                        overflow-y: hidden;\n                        overflow-x: hidden;\n                      }\n                      \n                      strong{\n                          font-size: 40px;\n                          color: #6bcfcf;\n                      }\n                      i{\n                          font-size: 60px;\n                          color: #6bcfcf;\n                          \n                      }\n                  " }} />
            <div className="col-md-2 mr-4 mt-4">
              <i className="fas fa-user-alt span" />
            </div>
            <div className="col-md-6 mt-4">
              <h4>EXERCIES</h4>
              <p><strong>9</strong> Completed out of 84</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 mr-4 mt-4">
              <i className="fas fa-chart-line span" />
            </div>
            <div className="col-md-6 mt-4">
              <h2>PROJECTS</h2>
              <p><strong>9</strong> Completed out of 84</p> 
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-2 mr-4 mt-2">
              <i className="fa fa-history span" aria-hidden="true" />
            </div>
            <div className="col-md-6 mt-2">
              <h2>TIME SPENT</h2> 
              <p><strong>5</strong> hourse stil now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{border: 'solid 7px', borderColor: '#6bcfcf', width: '50%',background: 'rgba(0, 0, 0, 0.5)'}}>
    <h1 style={{color: '#6bcfcf'}}><Count onTimesup={onTimesup}
              duration={600}
            /> minute</h1>
    </div>
  </div>
  <style dangerouslySetInnerHTML={{__html: "\n    .r{\n      /* background: rgb(195,105,105);\nbackground: linear-gradient(158deg, rgba(195,105,105,1) 13%, rgba(85,95,227,1) 26%, rgba(114,73,88,1) 39%, rgba(148,86,181,1) 52%, rgba(52,55,113,1) 68%, rgba(133,103,120,1) 78%, rgba(70,36,41,1) 89%, rgba(78,69,79,1) 99%); */\nborder-radius: 50%;\nborder: solid;\nwidth: 450px;\nheight: 450px;\nposition: absolute;\nright: 550px;\ntop: 170px;\nbackground: rgba(0, 0, 0, 0.8);\nbox-shadow: 2px 3px 50px #6bcfcf ;\nborder-color: #6bcfcf;\n\n\n    }\n    \n    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\n\n    .img{\n      /* background: rgb(195,105,105);\nbackground: linear-gradient(158deg, rgba(195,105,105,1) 13%, rgba(85,95,227,1) 26%, rgba(114,73,88,1) 39%, rgba(148,86,181,1) 52%, rgba(52,55,113,1) 68%, rgba(133,103,120,1) 78%, rgba(70,36,41,1) 89%, rgba(78,69,79,1) 99%); */\nborder-radius: 50%;\nbox-shadow: 2px 3px 50px #fff ;\n\nborder: solid;\nbackground-color: rgb(76, 71, 71);\nwidth: 450px;\nheight: 450px;\nposition: absolute;\nright: 550px;\ntop: 170px;\nborder-color: #6bcfcf;\n-webkit-animation:spin 4s  ;\n    -moz-animation:spin 4s  ;\n    animation:spin 4s  ;\n    }\n    .c{\n        margin: 10%;\n    }\n    .input{\n      background-color: rgba(46, 97, 132, 0.5) !important;\n      color: #6bcfcf !important;\n      font-size: 50px !important;\n      height: 50px !important;\n    }\n    \n    \n" }} />

  <div className="r_r">
    <center><img className='img' src="https://i.pinimg.com/originals/a5/38/8c/a5388cf7c3411dfebf0e1530ea4f6445.png" width="50%" alt /></center> 
  </div>
  <div className="r">
    <div className="c text-center">
      <img src="ezgif.com-gif-maker-removebg-preview.png" width="50%" alt  />
      {/* <i class="fas fa-fingerprint"></i> */}
      <form onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <label htmlFor="my-input">ENTER YOUR PILEARNING PASSWORD</label>
        <input id="my-input" className="form-control input" style={{WebkitTextSecurity: 'square'}} type="password" value={name}
          onChange={(e) => setName(e.target.value)} />
        <button className="button" type="submit"><b>Enter Lab</b></button>
        <style dangerouslySetInnerHTML={{__html: "\n      .button{\nbackground-color: #6bcfcf;\ncolor: black;\nborder-color: #6bcfcf;\nfont-size: 40px;\npadding-top: 5px;\npadding-bottom: 5px;\npadding-left: 30px;\npadding-right: 30px;\nmargin: 30px;\n      }\n  " }} />
      </div>
      </form>
    </div>
  </div>
</div>
  );
}

export default App;
