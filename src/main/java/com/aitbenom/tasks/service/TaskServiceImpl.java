package com.aitbenom.tasks.service;

import com.aitbenom.tasks.domain.Task;
import com.aitbenom.tasks.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService
{

    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list()
    {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        System.out.println(task);
        return this.taskRepository.save(task);
    }
}
