import React from 'react';
import './skin2.css'
const Skin2 = (props) => {

    let {
        fname,
        lname,
        summary,
        email,
        phone,
        profession,
        street,
        city,
        state,
        country,
        pin,
    } = props.contact;


    let { cgpa, city: educationCity, state: educationState, degree, collegeName, graduationMonth, graduationYear } = props.education;
    return (
        <React.Fragment>


            <div className="prev-header">
                <div className="name">
                    <div className="fname">{fname}</div>
                    <div className="lname">{lname}</div>
                </div>
                <div className="contacts">
                    <div className="adress">
                        <div className="street">{street}</div>
                        <div className="city">{city}</div>
                        <div className="state">{state}</div>
                        <div className="country">{country}</div>
                        <div className="pin">{pin}</div>
                    </div>
                    <div className="phone">{`Ph - ${phone}`}</div>
                    <div className="email">{`Email - ${email}`}</div>
                </div>
            </div>
            <div className="headings">SUMMARY</div>
            <div className="summary">
                <div className="profession details">{profession}</div>
                <div className="details">{summary}</div>

            </div>


            <div className="headings">EDUCATION</div>
            <div className="education-details">
                <div className="line1">
                    <div className="course-detail">
                        <div className="degree">{degree}</div>
                        <div className="college">: {collegeName}</div>
                    </div>
                    <div className="edu-end">
                        <div className="graduationMonth">{graduationMonth}</div>
                        <div className="graduationYear">{graduationYear}</div>
                    </div>
                </div>
                <div className="edu-contact">
                    <div className="educationCity">{educationCity}</div>
                    <div className="educationState">{educationState}</div>
                </div>
                <div className="cgpa">{`CGPA: ${cgpa}`}</div>
            </div>
        </React.Fragment>

    );
}

export default Skin2;