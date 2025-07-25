package com.example.yogaposeguide.controllers;

import com.example.yogaposeguide.dto.RoutineReqDto;
import com.example.yogaposeguide.models.Routine;
import com.example.yogaposeguide.dto.RoutineDto;
import com.example.yogaposeguide.services.RoutineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routine")
public class RoutineController {

    @Autowired
    RoutineService routineService;

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PostMapping("/add")
    public RoutineDto addRoutine(@RequestBody RoutineReqDto routine) {
        return routineService.addRoutine(routine);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/user/{userId}")
    public List<RoutineDto> getRoutineByUser(@PathVariable Long userId) {
        return routineService.getRoutineByUser(userId);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PutMapping("/update/{id}")
    public RoutineDto updateRoutine(@PathVariable Long id, @RequestBody RoutineReqDto routineReqDto) {
        return new RoutineDto(routineService.updateRoutine(id, routineReqDto));
    }


    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @DeleteMapping("/delete/{id}")
    public String deleteRoutine(@PathVariable Long id) {
        return routineService.deleteRoutine(id);
    }
}
