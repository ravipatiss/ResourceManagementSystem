package com.ems.emsbackend.controller;

import com.ems.emsbackend.dto.EmployeeDto;
import com.ems.emsbackend.entity.Employee;
import com.ems.emsbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path ="/api/employees")
public class EmployeeController {
private EmployeeService employeeService;

//add employee rest API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee =employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

    }
    // get employee rest api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto =employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }
    // get all employees
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employeeDtos = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDtos);
    }
    //update employee
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateById(@PathVariable("id") Long enployeeId,@RequestBody EmployeeDto updateEmployee){
        EmployeeDto updatedEmployeeDto= employeeService.updateByEmployeeId(enployeeId, updateEmployee);
        return ResponseEntity.ok(updatedEmployeeDto);
    }
    //Delete Employee
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("employee deleted");
    }
}
