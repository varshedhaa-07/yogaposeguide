package com.example.yogaposeguide.controllers;


import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.services.YogaPoseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class YogaPoseController {
    @Autowired
    YogaPoseService yogaPoseService;

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/poses")
    public List<YogaPoses> getPoses(){
        return yogaPoseService.getPoses();
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("/poses/{poseId}")
    public YogaPoses getPoseById(@PathVariable Long poseId){
        return yogaPoseService.getPoseByID(poseId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/poses")
    public String addPose(@RequestBody YogaPoses pose){
        return yogaPoseService.addPose(pose);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/poses/{poseId}")
    public String updatePose(@PathVariable Long poseId, @RequestBody YogaPoses updatedPose) {
        return yogaPoseService.updatePose(poseId, updatedPose);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/poses/{poseId}")
    public String deletePoseById(@PathVariable long poseId){
        return yogaPoseService.deletePoseById(poseId);
    }
}
