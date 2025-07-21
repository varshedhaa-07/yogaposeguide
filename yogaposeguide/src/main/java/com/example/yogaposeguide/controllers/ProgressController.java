//package com.example.yogaposeguide.controllers;
//
//import com.example.yogaposeguide.models.Progress;
//import com.example.yogaposeguide.services.ProgressService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/progress")
//public class ProgressController {
//
//    @Autowired
//    ProgressService progressService;
//
//    @PostMapping("/mark")
//    public Progress markProgress(@RequestBody Progress progress) {
//        return progressService.markProgress(progress);
//    }
//
//    @GetMapping("/user/{userId}")
//    public List<Progress> getProgressByUser(@PathVariable int userId) {
//        return progressService.getProgressByUser(userId);
//    }
//}
