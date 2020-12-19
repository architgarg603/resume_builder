import React, { Component } from 'react'
import "./landingPage.css";
import resume from '../static/images/resume.png';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updateState } from '../actions/updateActions';




class Landing extends Component {
    state = {}

    getStartedHandler = () => {
        if (this.props.firebaseAuth.uid) {

            console.log(this.props);
            let uid = this.props.firebaseAuth.uid;
            let data = this.props.firebaseData.resumes[uid];
            console.log(data);

            // dispatch ????
            this.props.updateState(data);
            this.props.history.push("/templates");
        } else {

            this.props.history.push("/signin");
        }
    }

    

    render() {
        return (
            <div className="landing-page" >
            
                    <h1>Create a resume that stands out</h1>
                    <p>Create a Resume that perfectally describes your skils and match job profile.</p>
                
                
                    <button className="btn" onClick={this.getStartedHandler}>Get Started For Free</button>
                
                <div className="logo" >
                    <img src={resume} alt="" />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        firebaseAuth: state.firebase.auth,
        firebaseData: state.firestore.data
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (state) => { dispatch(updateState(state)) }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([{ collection: "resumes" }]))(Landing);
