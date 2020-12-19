import React, { Component } from "react";
import { connect } from "react-redux";
import "./finalize.css";
import Preview from "./preview";
import { Link } from "react-router-dom";
import { skinCodes } from "../Constants/skinCodes";
import { updateSkin } from "../actions/documentActions";
import Pdf from "react-to-pdf"





class Finalize extends Component {
  state = {
    contact: this.props.contact,
    education: this.props.education,
    skinCode: this.props.skinCode
  };

  handleSkinSelect = (skinCode) => {
    //  console.log(skinCode);
    this.props.changeSkinCode(skinCode);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({
      skinCode: newProps.skinCode
    })
  }


  render() {
    let ref = React.createRef();
    let { contact, education, skinCode } = this.state;
    return (
      <div className="finalize">
        <div className="final-preview" ref={ref} >
          <Preview contact={contact} education={education}></Preview>
        </div>
        <div className="download-btn">
          <Pdf targetRef={ref} filename="resume.pdf" scale={1.6}>
            {({ toPdf }) => (
              <button className="btn" onClick={toPdf}>Generate pdf</button>
            )}
          </Pdf>
        </div>
        <div className="finalize-templates" >
          <div className="finalize-heading">Choose Templates</div>
          <div className="finalize-options">
            {skinCodes.map((skin) => {
              let className = skin.value == skinCode ? "selected" : "";
              return <div key={skin.id} className={`finalize-template finalize-${className}`} >
                <img src={`/images/${skin.value}.svg`} className="finalize_img" alt="" />
                <button class={`finalize-template-btn finalize-${className}-btn`} onClick={() => { this.handleSkinSelect(skin.value) }}>USE TEMPLATE</button>
                <img src="/images/g-tick.png" className={`finalize-tick-img  finalize-${className}-tick`} alt="" />
              </div>
            })}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetails,
    education: state.educationDetails,
    skinCode: state.document.skinCode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSkinCode: (skinCode) => { dispatch(updateSkin(skinCode)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finalize);
