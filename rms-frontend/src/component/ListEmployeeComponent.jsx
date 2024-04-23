import React from "react";
import { useState, useEffect } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getAllEmployees();
  }, []);

  const addEmployee = () => navigate("/add-employee");
  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => console.error(error));
    console.log(id);
  };
  const updateEmployee = (id) => navigate(`/update-employee/${id}`);

  return (
    <div className="container">
      <h1 className="text-center font-weight-bold ">Employee Rooster</h1>
      <button
        className="btn btn btn-light btn-outline-dark mb-2"
        onClick={addEmployee}
      >
        Add Employee
      </button>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    updateEmployee(employee.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeEmployee(employee.id);
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
