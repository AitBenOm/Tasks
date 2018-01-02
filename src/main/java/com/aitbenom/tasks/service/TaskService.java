package com.aitbenom.tasks.service;

import com.aitbenom.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
