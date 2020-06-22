import React, { Component } from "react";    
import './TDEE.css'    
    
class TDEE extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
             age:'',
             weight:'',
             height:'',
             gender:'Male',
             activity:'sedentary',
             bodyFat:'',
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { age, weight, height, gender, activity, bodyFat } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //age
        if (!age) {    
            formIsValid = false;    
            formErrors["ageErr"] = "Age is required.";    
        }    
    
        //weight   
        if (!weight) {    
            formIsValid = false;    
            formErrors["weightErr"] = "Weight is required.";    
        }    
       
    
        //height    
        if (!height) {    
            formIsValid = false;    
            formErrors["heightErr"] = "Height is required.";    
        }    
       
    
        //gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
       
    
        //Activity    
        if (activity === "select") {    
            formIsValid = false;    
            formErrors["activityErr"] = "Activity ";    
        }    
    
         //weight   
         if (!weight) {    
            formIsValid = false;    
            formErrors["fatErr"] = "Body Fat is required.";    
        }    

        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    console.log(this.state);
        if (this.handleFormValidation()) {    
            alert(`${this.state.age}\n${this.state.weight}\n${this.state.height}\n
            ${this.state.gender}\n${this.state.activity}\n${this.state.bodyFat}`)    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { ageErr, weightErr, heightErr, genderErr, activityErr,fatErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >TDEE Calculator</ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="age">Age</label>    
                            <input type="text" name="age"    
                                value={this.state.age}    
                                onChange={this.handleChange}    
                                placeholder="Ex : 36"    
                                className={ageErr ? ' showError' : ''} />    
                            {ageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{ageErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="weight">Weight</label>    
                            <input type="text" name="weight"    
                                value={this.state.weight}    
                                onChange={this.handleChange}    
                                placeholder="Ex : 75Kg"    
                                className={weightErr ? ' showError' : ''} />    
                            {weightErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{weightErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="height">Height</label>    
                            <input type="text" name="height"    
                                value={this.state.height}    
                                onChange={this.handleChange}    
                                placeholder="Ex : 181cm"    
                                className={heightErr ? ' showError' : ''} />    
                            {heightErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{heightErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender"  value={this.state.gender} onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}   >    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                       
                        <div>    
                            <label htmlFor="activity">Activity</label>    
                            <select name="activity"    
                                value="Sedentary (office job)"
                                onChange={this.handleChange}    
                                className={activityErr ? ' showError' : ''} >  
                                <option value="sedentary">Sedentary (office job)</option>    
                                <option value="light">Light Exercise (1-2 days/week)</option>    
                                <option value="heavy">Heavy Excercise (5-6 days/week)</option>    
                            </select>    
                            {activityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{activityErr}</div>    
                            }    
                        </div>    

                        <div>    
                            <label htmlFor="bodyFat">Body Fat %</label>    
                            <input type="text" name="bodyFat"    
                                onChange={this.handleChange}    
                                value={this.state.bodyFat}    
                                placeholder="optional (%)"    
                                className={fatErr ? ' showError' : ''} />    
                            {fatErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{fatErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default TDEE;