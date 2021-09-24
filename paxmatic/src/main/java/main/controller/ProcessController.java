package main.controller;

import main.Model.BasicProcess;
import main.Service.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping
public class ProcessController {

   @Autowired
   public ProcessService processService;

   @GetMapping(path="/{parent}")
   public Iterable<BasicProcess> getAllProcessByUuid(@PathVariable Integer parent ) {
      return processService.findByParent(parent);
   }

   @GetMapping(path="basic/{level}")
   public Iterable<BasicProcess> getAllBasicProcess(@PathVariable Integer level ) {
      return processService.findByLevel(level);
   }

   @PostMapping("/new")
   public Iterable<BasicProcess> addNewProcess(@RequestBody BasicProcess process){
      return processService.addNewProcess(process);
   }

   @DeleteMapping("/{id}")
   public Iterable<BasicProcess> deleteProcess(@PathVariable Integer id) {
       return processService.deleteprocess(id);
   }

}
