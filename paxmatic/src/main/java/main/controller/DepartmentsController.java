package main.controller;


import main.Model.BasicProcess;
import main.Model.Departments;
import main.Service.DepartmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping
public class DepartmentsController {

    @Autowired
    public DepartmentsService departmentsService;

    @GetMapping(path="/departments/all" )
    public Iterable<Departments> getAllDepartments(){
        return departmentsService.findAll();
    }

    @PutMapping("/updateDepartment")
    public Iterable<Departments> updateDepartments(@RequestBody Departments[] departments) {
        return departmentsService.updateDepartmentOrder(departments);
    }

    @PostMapping("/newDepartment")
    public Iterable<Departments> addNewDepartment(@RequestBody Departments department) {
        return departmentsService.addNewDepartment(department);
    }

    @DeleteMapping("/deleteDepartment/{id}")
    public Iterable<Departments> deleteDepartment(@PathVariable Integer id) {
        return departmentsService.deleteDepartment(id);
    }
}
