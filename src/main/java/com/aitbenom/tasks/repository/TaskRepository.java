package com.aitbenom.tasks.repository;

import com.aitbenom.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
