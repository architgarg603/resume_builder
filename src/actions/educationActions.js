export const updateEducation = (educationDetails)=>{

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // aasync taskss
    
        // firebase => update doc
        let db = getFirestore();
        // console.log(getState());
        let uid = getState().firebase.auth.uid;
    
        db.collection("resumes").doc(uid).set(
          {
            educationDetails: educationDetails,
          },
          { merge: true }
        ).then(()=>{
            dispatch({  type:"UPDATE_EDUCATION" , educationDetails:educationDetails })
        })
    }
    
    
    
}