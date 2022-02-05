import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/ContextWrapper";

const EditPerson = () => {
  const { persons } = useContext(GlobalContext);
  let { id: currentID } = useParams();
  const [currentDetails, setCurrentDetails] = useState({
    first_name: '',
    last_name: '',
    dob: '',
  });

  useEffect(() => {
    const findDetails = persons.find(
      (eachPerson) => eachPerson.id === parseInt(currentID)
    );
    setCurrentDetails(findDetails);
    console.log(findDetails.dob)
  }, [currentID, persons]);

  const getCurrentDate = () => {
    //   to avoid entering future dates
    //  not using moment js since it is small application
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const currentMonth = (month < 10 ? "0" : "") + month;
    const currentDate = (today < 10 ? "0" : "") + today;
    const currentYear = date.getFullYear();
    return `${currentYear}-${currentMonth}-${currentDate}`;
  };

  return (
    <div className="login-section">
      <section className="section is-small">
      <p>Edit person details functionality is not fully done</p>
        <h2 className="subtitle">Update Person Details</h2>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              value={currentDetails.first_name}
            />
          </div>
          {currentDetails.first_name}
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={currentDetails.last_name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Date of Birth</label>
          <div className="control">
            <input
              className="input"
              type="date"
              placeholder="DOB"
              value={currentDetails.dob}
              max={getCurrentDate()}
            />
          </div>
        </div>
        <div className="submit-button">
          <button onClick="" className="button is-dark">
            Update Person Details
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditPerson;
