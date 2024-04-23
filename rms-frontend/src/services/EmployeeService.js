import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

import React from "react";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};
export const addEmployee = (employee) =>
  axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (id) => axios.get(REST_API_BASE_URL + "/" + id);
export const putsEmployee = (id, employee) =>
  axios.put(REST_API_BASE_URL + "/" + id, employee);
export const deleteEmployee = (id) =>
  axios.delete(REST_API_BASE_URL + "/" + id);
