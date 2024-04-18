package com.ems.emsbackend.service;

import com.ems.emsbackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto empoyeeDto);
    EmployeeDto getEmployeeById(Long employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateByEmployeeId(Long employeeId, EmployeeDto updateEmployee);
    void deleteEmployee(Long employeeId);

}
