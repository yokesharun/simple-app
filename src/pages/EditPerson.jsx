import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/ContextWrapper";

const EditPerson = () => {
  let navigate = useNavigate();
  const { persons, editPerson } = useContext(GlobalContext);
  let { id: currentID } = useParams();
  const [currentDetails, setCurrentDetails] = useState({
    first_name: "",
    last_name: "",
    dob: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const { first_name, last_name, dob } = currentDetails;

  useEffect(() => {
    const findDetails = persons.find(
      (eachPerson) => eachPerson.id === parseInt(currentID)
    );
    setCurrentDetails(findDetails);
    console.log(findDetails.dob);
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

  const handleSubmit = (e) => {
    if (first_name && last_name && dob) {
      e.preventDefault();

      editPerson(currentDetails);
      setShowNotification(true);
      setTimeout(() => {
        // adding timeout to see the notification message functionality
        navigate("/home");
      }, 3000);
    }
  };

  const handleOnChangeInput = (userKey, newValue) =>
    setCurrentDetails({ ...currentDetails, [userKey]: newValue });

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
              Person Details Updated!
              <p>Redirecting to home page in 3 seconds...</p>
            </div>
          </article>
        )}
        <h2 className="subtitle">Update Person Details</h2>
        <form>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="First Name"
                value={first_name}
                required
                onChange={(e) =>
                  handleOnChangeInput("first_name", e.target.value)
                }
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
                value={last_name}
                required
                onChange={(e) =>
                  handleOnChangeInput("last_name", e.target.value)
                }
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
                required
                onChange={(e) => handleOnChangeInput("dob", e.target.value)}
                max={getCurrentDate()}
              />
            </div>
          </div>
          <div className="submit-button">
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="button is-dark"
              type="submit"
            >
              Update Person Details
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditPerson;
