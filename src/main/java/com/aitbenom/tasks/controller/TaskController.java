package com.aitbenom.tasks.controller;

import com.aitbenom.tasks.domain.Task;
import com.aitbenom.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {


    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"","/"})
    public Iterable<Task> list(){

        for(Task task : taskService.list()){
            System.out.println(task);
        }
        return this.taskService.list();

    }

    @PostMapping("/save")
    public Task saveTask (@RequestBody Task task){
        System.out.println(task);
        return  taskService.save(task);
    }
}
