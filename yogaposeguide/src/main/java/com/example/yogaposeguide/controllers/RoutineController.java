package com.example.yogaposeguide.controllers;

import com.example.yogaposeguide.dto.RoutineReqDto;
import com.example.yogaposeguide.models.Routine;
import com.example.yogaposeguide.dto.RoutineDto;
import com.example.yogaposeguide.services.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routine")
public class RoutineController {

    @Autowired
    RoutineService routineService;

    @PostMapping("/add")
    public RoutineDto addRoutine(@RequestBody RoutineReqDto routine) {
        return routineService.addRoutine(routine);
    }

    @GetMapping("/user/{userId}")
    public List<RoutineDto> getRoutineByUser(@PathVariable Long userId) {
        return routineService.getRoutineByUser(userId);
    }

    @PutMapping("/update/{id}")
    public Routine updateRoutine(@PathVariable Long id, @RequestBody Routine routine) {
        return routineService.updateRoutine(id, routine);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRoutine(@PathVariable Long id) {
        return routineService.deleteRoutine(id);
    }
}
