import React, { Component } from 'react';

class Diabetes extends Component {

    constructor(props)
    {
        super(props);
        this.state=this.initialValue;

    }
    initialValue={
        testType:'',
        result:'',
        labName:'',
        hospital:'',
        age:'',
        errorMsg:''
    }

    submitHandler = event =>{

        event.preventDefault();
        axios.post('http://localhost:8089/report/diabetes',this.state);
         console.log(this.state);
    }

    changeHandler = event =>
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const {testType,result,labName,hospital,age,errorMsg}=this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <h3></h3>
               
            <h3>Blood Sugar Test</h3>

            <div className="form-group">
                <label>Test Type</label>
                <input type="text" name="testType" className="form-control" placeholder="Ex : FBC or Hemoglobin A1C..." value={testType} onChange={this.changeHandler}/>
            </div>

            <div className="form-group">
                <label>Result</label>
                <input type="text" name="result" className="form-control" placeholder="Ex : 140mg/dl" value={result} onChange={this.changeHandler}/>
            </div>

            <div className="form-group">
                <label>Lab Name</label>
                <input type="text" name="labName" className="form-control" placeholder="Ex : Asiri Lab" value={labName} onChange={this.changeHandler}/>
            </div>

            <div className="form-group">
                <label>Hospital</label>
                <input type="text" name="hospital" className="form-control" placeholder="Ex : Asiri Hospital" value={hospital} onChange={this.changeHandler}/>
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="text" name="age" className="form-control" placeholder="Ex : 45" value={age} onChange={this.changeHandler}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          
        </form>

        );
    }
}

export default Diabetes;