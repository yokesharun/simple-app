import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/ContextWrapper";

const EditPerson = () => {
  let navigate = useNavigate();
  const { addPerson, persons } = useContext(GlobalContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = () => {
    addPerson({
      id: persons.length + 1,
      first_name: firstName,
      last_name: lastName,
      dob,
    });
    navigate("/home");
  };

  const getCurrentDate = () => {
    //   to avoid entering future dates
    //  not using moment js since it is small application
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1; 
    const currentMonth = (month < 10 ? '0' : '') + month;
    const currentDate = (today < 10 ? '0' : '') + today;
    const currentYear = date.getFullYear();
    return `${currentYear}-${currentMonth}-${currentDate}`;
  }

  return (
    <div className="login-section">
      <section className="section is-small">
        <h2 className="subtitle">Enter Person Details</h2>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={getCurrentDate()}
            />
          </div>
        </div>
        <div className="submit-button">
          <button onClick={() => handleSubmit()} className="button is-dark">
            Add Person
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditPerson;
