package main.Service;

import main.Model.BasicProcess;
import main.Repository.ProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProcessService {


    @Autowired
    private ProcessRepository processRepository;

    public Iterable<BasicProcess> findAll() {
        return this.processRepository.findAll();
    }


    public Iterable<BasicProcess> findByParent(Integer parent) {
        return this.processRepository.findProcessByParent(parent);
    }

    public Iterable<BasicProcess> findByLevel(Integer level) {
        return this.processRepository.findProcessByLevel(level);
    }

    public Iterable<BasicProcess> addNewProcess(BasicProcess process) {
        Integer parent = process.getParent();
        this.processRepository.save(process);
        return findByParent(parent);
    }


    @Async
    public Iterable<BasicProcess>  deleteprocess(Integer id) {
        Optional<BasicProcess> basic = this.processRepository.findById(id);
        this.processRepository.deleteById(id);
        Integer parent = basic.get().getParent();
         return findByParent(parent);
    }
}
