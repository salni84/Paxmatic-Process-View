package main.Service;

import main.Model.BasicProcess;
import main.Repository.ProcessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProcessService {


    @Autowired
    private ProcessRepository processRepository;

    public Iterable<BasicProcess> findAll() {
        return this.processRepository.findAll(Sort.by(Sort.Direction.ASC, "position"));
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

    @Async
    public Iterable<BasicProcess> updateProcess(BasicProcess process) {
        Optional<BasicProcess> processDB= processRepository.findById(process.getId());
        processDB.get().setProcessname(process.getProcessname());
        processDB.get().setColor(process.getColor());
        this.processRepository.save(process);
        return findAll();
    }


    @Async
    public Iterable<BasicProcess> updateProcessOrder(BasicProcess[] process) {
        for (int x= 0; x < process.length; x++) {
            Optional<BasicProcess> processDB= processRepository.findById(process[x].getId());
            processDB.get().setProcessname(process[x].getProcessname());
            processDB.get().setColor(process[x].getColor());
            this.processRepository.save(process[x]);
        }
        return findAll();
    }
}
