package com.aitbenom.tasks.controller;

import com.aitbenom.tasks.domain.Task;
import com.aitbenom.tasks.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {


    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"","/"})
    public Iterable<Task> list(){

        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask (Task task){
        return  taskService.save(task);
    }
}
