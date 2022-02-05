import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/ContextWrapper";

const AddPerson = () => {
  let navigate = useNavigate();
  const { addPerson, persons } = useContext(GlobalContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = () => {
    addPerson({
      id: persons.length + 1,
      first_name: firstName,
      last_name: lastName,
      dob,
    });
    setShowNotification(true);
    setTimeout(() => {
      // adding timeout to see the notification message functionality
      navigate("/home");
    }, 3000);
  };

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

  useEffect(() => {
    // clearing success notification on unmount
    return () => {
      setShowNotification(false);
    };
  }, []);

  return (
    <div className="login-section">
      <section className="section is-small">
        {showNotification && (
          <article class="message is-primary">
            <div class="message-header">
              <p>Success!</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Person Details Added!
              <p>Redirecting to home page in 3 seconds...</p>
            </div>
          </article>
        )}
        <h2 className="subtitle">Enter Person Details</h2>
        <form>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
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
                required
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
                required
              />
            </div>
          </div>
          <div className="submit-button">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="button is-dark"
            >
              Add Person
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddPerson;
