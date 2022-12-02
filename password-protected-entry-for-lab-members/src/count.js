import React from "react";

export default class Count extends React.Component{
constructor(props){
    super(props);
    this.state={
        count:props.duration ? props.duration:5,
    }
}
componentDidMount(){
    this.timer =setInterval(()=>{
        let {count}= this.state;
        this.setState({
            count:count-1
        })
    }, 1000)
}

componentDidUpdate(prevProps,prevState, snapshot){
    if(prevState.count !==this.state.count && this.state.count===0)
 clearInterval(this.timer);
 if(this.props.onTimesup !==this.state.count && this.state.count===0){
    this.props.onTimesup();
 }
}
fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}
render(){
    
    let {count} = this.state;
    return(
        <>

  <div className="container">
    <div className="container-fluid">
      <div className="mt text-center">
        <style dangerouslySetInnerHTML={{__html: "\n                                .timer {\n                          background: -webkit-linear-gradient(left, skyBlue 50%, #eee 50%);\n                          border-radius: 100%;\n                          height: 400px;\n                          width: 400px;\n                          top: 120px;\n                          left: 250px;\n                          position: relative;\n                          -webkit-animation: time 600s steps(1000, start) infinite;\n                            -webkit-mask: radial-gradient(transparent 50%,#000 50%);\n                            mask: radial-gradient(transparent 50%,#000 50%);\n                      }\n                      .mask {\n                          border-radius: 100% 0 0 100% / 50% 0 0 50%;\n                          height: 100%;\n                          left: 0;\n                          position: absolute;\n                          top: 0;\n                          width: 50%;\n                          -webkit-animation: mask 600s steps(500, start) infinite;\n                          -webkit-transform-origin: 100% 50%;\n                      }\n                      @-webkit-keyframes time {\n                          100% {\n                              -webkit-transform: rotate(360deg);\n                          }\n                      }\n                      @-webkit-keyframes mask {\n                          0% {\n                              background: #eee;\n                              -webkit-transform: rotate(0deg);\n                          }\n                          50% {\n                              background: #eee;\n                              -webkit-transform: rotate(-180deg);\n                          }\n                          50.01% {\n                              background: skyBlue;\n                              -webkit-transform: rotate(0deg);\n                          }\n                          100% {\n                              background: skyBlue;\n                              -webkit-transform: rotate(-180deg);\n                          }\n                      }\n                      .po{\n                          position: absolute;\n                          left: 74.2%;\n                          top: 43%;\n                          font-size: 100px;\n                      }\n    .p{\n font-size:20px;\n margin-left:200px;\n }\n                       " }} />
        <div className="timer">
          <div className="mask">
          </div>
        </div>
        <div className="po">
        {this.fmtMSS(count)}
        </div>
        <p className="p">out of 10 minute</p>
      </div>
    </div>
  </div>


  
        </>
    
    )
}
}