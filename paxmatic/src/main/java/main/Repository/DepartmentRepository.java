package main.Repository;
;
import main.Model.BasicProcess;
import main.Model.Departments;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DepartmentRepository extends CrudRepository<Departments, Integer> {

    List<Departments> findAll(Sort sort);

    List<Departments> findDepartmentsByParent(Integer parent);
}

