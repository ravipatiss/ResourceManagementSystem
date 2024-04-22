import React from "react";
import { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const navigate = useNavigate();

  const addEmployee = () => navigate("/add-employee");

  return (
    <div className="container">
      <h1 className="text-center font-weight-bold">List of Employees</h1>
      <button
        className="btn btn btn-light btn-outline-dark mb-2"
        onClick={addEmployee}
      >
        Add Employee
      </button>
      <table className="table table-hover">
        <thead className="thead-dark">
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
