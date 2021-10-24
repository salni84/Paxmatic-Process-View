package main.Service;

import main.Model.BasicProcess;
import main.Model.Departments;
import main.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentsService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public Iterable<Departments> findAll() {
        return this.departmentRepository.findAll(Sort.by(Sort.Direction.ASC, "verticalorder"));
    }

    public Iterable<Departments> findByParent(Integer parent) {
        return this.departmentRepository.findDepartmentsByParent(parent);
    }

    public Iterable<Departments> addNewDepartment(Departments department) {
        Integer parent = department.getParent();
        this.departmentRepository.save(department);
        return findByParent(parent);
    }

    @Async
    public Iterable<Departments>  deleteDepartment(Integer id) {
        Optional<Departments> basic = this.departmentRepository.findById(id);
        this.departmentRepository.deleteById(id);
        Integer parent = basic.get().getParent();
        return findByParent(parent);
    }


    @Async
    public Iterable<Departments> updateDepartmentOrder(Departments[] departments) {
        for (int x= 0; x < departments.length; x++) {
            Optional<Departments> deparmentDB= departmentRepository.findById(departments[x].getId());
            deparmentDB.get().setDepartmentname(departments[x].getDepartmentname());
            deparmentDB.get().setColor(departments[x].getColor());
            this.departmentRepository.save(departments[x]);
        }
        return findAll();
    }
}
