package main.Repository;

import main.Model.BasicProcess;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProcessRepository extends CrudRepository<BasicProcess, Integer> {

    List<BasicProcess> findProcessByParent(Integer parent);

    List<BasicProcess> findProcessByLevel(Integer level);

    List<BasicProcess> findAll(Sort sort);
}



