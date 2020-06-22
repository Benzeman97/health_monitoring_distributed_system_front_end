import React, { Component } from 'react';
import Axios from 'axios';

class Lipid extends Component {

    constructor(props)
    {
        super(props);
        this.state=this.initialValue;
    }
    initialValue={
        age:'',
        tcho:'',
        ldl:'',
        hdl:'',
        trigly:'',
        diabetesPatent:false,
        errorMsg:''
        
    }

    submitHandler = event =>{

        event.preventDefault();
        Axios.post('http://localhost:8089/report/lipid',this.state);
         console.log(this.state);
    }

    changeHandler = event =>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   
    checkHandler=()=>
    {
          var checkBox = document.getElementById("customCheck1");


          if(!checkBox.checked)
          {
              this.setState({
                  diabetesPatent:false
              })
          }else{
            this.setState({
                diabetesPatent:true
            })
          }
    }

    render() {
        const {age,tcho,ldl,hdl,trigly}=this.state;
        
        return (
            
            <form onSubmit={this.submitHandler}>
                <h3></h3>
            <h3>Lipid profile Test</h3>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name="age" className="form-control" placeholder="Ex : 36" onChange={this.changeHandler} value={age} />
            </div>

            <div className="form-group">
                <label>Total Cholesterol</label>
                <input type="text" name="tcho" className="form-control" placeholder="Ex : 250mg/dl" onChange={this.changeHandler} value={tcho} />
            </div>

            <div className="form-group">
                <label>LDL Cholesterol</label>
                <input type="text" name="ldl" className="form-control" placeholder="Ex : 130mg/dl" onChange={this.changeHandler} value={ldl} />
            </div>

            <div className="form-group">
                <label>HDL Cholesterol</label>
                <input type="test" name="hdl" className="form-control" placeholder="Ex : 40mg/dl" onChange={this.changeHandler} value={hdl} />
            </div>

            <div className="form-group">
                <label>Triglycerides</label>
                <input type="text" name="trigly" className="form-control" placeholder="Ex : 160mg/dl" onChange={this.changeHandler} value={trigly} />
            </div>
            

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" onClick={this.checkHandler}/>
                    <label className="custom-control-label" htmlFor="customCheck1">diabetes patient</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
           
        </form>

        );
    }
}

export default Lipid;