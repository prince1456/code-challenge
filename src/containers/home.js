import React, { Component } from "react";
import { Step } from "semantic-ui-react";
import {
  Agreement,
  GeneralSymptoms,
  HeadSymptoms,
  EsophegalSymptoms
} from "../components/formSteps";
import { Link } from 'react-router-dom';
export default class Home extends Component {
  state = {
    active: "agreement",
    agreement: { active: false },
    recentWeightGain: { active: false },
    recentWeightLost: { active: false },
    frequentHeadaches: { active: false },
    hearingLoss: { active: false },
    esophegalSymptoms: { active: false },
    frequentHeartburn: { active: false },
    chestPain: { active: false },
  };

  handleClick = (e, { title }) =>
    console.log(title) || this.setState({ active: title });
  handleCheckBox = (e, { name }) => {
    this.setState({
      [name]: { ...this.state[name], active: !this.state[name].active }
    });
  };
  handleChaneRadio = (e, { value, name }) => {
    this.setState({ [name]: { ...this.state[name], condition: value } });
    // this.setState({ value })
  };
  handleSubmit = (e) => {
    e.preventDefault()
    let params = {}
    Object.keys(this.state).map((key) => {
      if(this.state[key].active === true) return params[key] = this.state[key]
    })
    console.table(params)
    
  }
  render() {
    const {
      active,
      agreement,
      recentWeightGain,
      recentWeightLost,
    } = this.state;
    console.log(active, agreement);
    console.log(this.state);
    return (
      <div className="form-wrapper">
        <div>
          <ul>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/second-gallery'>Second Gallery</Link></li>
          </ul>
        </div>
        <div>
          <Step.Group attached="top">
            <Step
              active={active === "agreement"}
              icon="circle notch"
              link
              onClick={this.handleClick}
              title="agreement"
              description="Please Read Carefully "
            />
            <Step
              active={active === "General Symptoms"}
              icon="podcast"
              link
              onClick={this.handleClick}
              title="General Symptoms"
              description="General Symptoms"
            />
            <Step
              active={active === "Head Symptoms"}
              icon="stethoscope"
              link
              onClick={this.handleClick}
              title="Head Symptoms"
              description="Head Symptoms"
            />
            <Step
              active={active === "Esophegal symptoms"}
              icon="stethoscope"
              link
              onClick={this.handleClick}
              title="Esophegal symptoms"
              description="Throat, Neck and Esophegal symptoms"
            />
          </Step.Group>
          <div>
            <form>
              {active === "agreement" && (
                <Agreement
                  agreement={agreement}
                  handleClick={this.handleClick}
                  handleCheckBox={this.handleCheckBox}
                />
              )}

              {active === "General Symptoms" && (
                <GeneralSymptoms
                  recentWeightGain={recentWeightGain}
                  recentWeightLost={recentWeightLost}
                  handleClick={this.handleClick}
                  handleCheckBox={this.handleCheckBox}
                />
              )}
              {active === "Head Symptoms" && (
                <HeadSymptoms
                  handleClick={this.handleClick}
                  handleCheckBox={this.handleCheckBox}
                  handleChaneRadio={this.handleChaneRadio}
                  state={this.state}
                />
              )}
              {active === "Esophegal symptoms" && (
                <EsophegalSymptoms
                  handleClick={this.handleClick}
                  handleCheckBox={this.handleCheckBox}
                  handleChaneRadio={this.handleChaneRadio}
                  state={this.state}
                  handleSave={this.handleSubmit}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
