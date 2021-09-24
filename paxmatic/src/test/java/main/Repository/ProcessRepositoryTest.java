package main.Repository;

import main.Model.BasicProcess;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

import javax.persistence.Table;
import java.util.List;


@DataJpaTest
public class ProcessRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProcessRepository processRepository;




}
