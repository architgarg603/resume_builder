import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateSkin } from '../actions/documentActions';
import { skinCodes } from "../Constants/skinCodes";


import "./templates.css";



class Templates extends Component {
  state = {
    skinCode: this.props.skinCode
  }

  handleSkinSelect = (skinCode) => {
    this.props.changeSkinCode(skinCode);
    this.props.history.push("/contact");
  }

  componentDidMount() {
    console.log("inside mount", this.props.skinCode);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({
      skinCode: newProps.skinCode
    })
  }


  render() {
    let { skinCode } = this.state;
    return (
      <div className="templates">
        <div className="templates-intro">
          <h1>Select a resume template to get started <img src="/images/g-tick.png" class="g-tick" alt=""/> </h1>
          <p>You’ll be able to edit and change this template later!</p>
        </div>
        <div className="templates-styles">
          {skinCodes.map((skin) => {
            let className = skin.value == skinCode ? "selected" : "";
            return <div key={skin.id} className={`template ${className}-skin`}  onClick={() => { this.handleSkinSelect(skin.value) }} >
              <img src={`/images/${skin.value}.svg`} className="skin" alt="" />
              <button class={`template-btn ${className}-btn `}>USE TEMPLATE</button>
              <img src="/images/g-tick.png" className={` ${className}-tick tick`} alt=""/>
            </div>
          })}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("inside templates map state", state);
  return {
    skinCode: state.document.skinCode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSkinCode: (skinCode) => { dispatch(updateSkin(skinCode)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
