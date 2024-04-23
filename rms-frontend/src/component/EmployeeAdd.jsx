import React, { useEffect } from "react";
import { useState } from "react";
import {
  addEmployee,
  getEmployee,
  putsEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeAdd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id)
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => console.error(error));
  }, [id]);
  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };
    if (firstName.trim()) errorsCopy.firstName = "";
    else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }
    if (lastName.trim()) errorsCopy.lastName = "";
    else {
      errorsCopy.lastName = "last name is required";
      valid = false;
    }
    if (email.trim()) errorsCopy.email = "";
    else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm) {
      const employee = { firstName, lastName, email };
      if (id) {
        putsEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigate("/employees");
          })
          .catch((error) => {
            console.error("Error updating employee:", error);
          });
      } else {
        addEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigate("/employees");
          })
          .catch((error) => {
            console.error("Error updating employee:", error);
          });
      }
    }
  };

  const pageTitle = () => {
    if (id) return <h2 className="text-center">Update Employee</h2>;
    else return <h2 className="text-center">Add Employee</h2>;
  };

  return (
    <>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Employee first name</label>
                  <input
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    value={firstName}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Employee last name</label>
                  <input
                    type="text"
                    value={lastName}
                    className="form-control"
                    placeholder="last name"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Employee emailId</label>
                  <input
                    type="text"
                    placeholder="emailId"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <button className="btn btn-success" onClick={submitForm}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeAdd;
