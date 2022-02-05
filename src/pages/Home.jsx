import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/ContextWrapper";

const Home = () => {
  let navigate = useNavigate();
  const { persons } = useContext(GlobalContext);

  const personList = () => {
    return (
      persons.length > 0 &&
      persons.map((person, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{`${person.first_name} ${person.last_name}`}</td>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.dob}</td>
          <td>{calculateAge(new Date(person.dob))}</td>
          <td>
            <Link to={`/edit/${i + 1}`}>Edit</Link>
          </td>
        </tr>
      ))
    );
  };

  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div className="home-section">
      <section className="section is-small">
        <div className="add-button">
          <a
            className="button is-primary is-small"
            onClick={() => navigate("/add")}
          >
            <strong>Add Person</strong>
          </a>
        </div>
        <table className="table is-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{personList()}</tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
