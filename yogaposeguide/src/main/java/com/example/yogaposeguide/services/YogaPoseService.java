package com.example.yogaposeguide.services;

import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.repository.YogaPoseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YogaPoseService {

    @Autowired
    YogaPoseRepository yogaPoseRepository;

    public List<YogaPoses> getPoses() {
        return yogaPoseRepository.findAll();
    }

    public YogaPoses getPoseByID(Long poseId) {
        return yogaPoseRepository.findById(poseId).orElse(new YogaPoses());
    }

    public String addPose(YogaPoses pose) {
        yogaPoseRepository.save(pose);
        return "Pose added successfully";
    }

    public String updatePose(Long poseId, YogaPoses updatedPose) {
        return yogaPoseRepository.findById(poseId).map(existingPose -> {
            existingPose.setPoseName(updatedPose.getPoseName());
            existingPose.setDifficulty(updatedPose.getDifficulty());
            existingPose.setPoseDes(updatedPose.getPoseDes());
            existingPose.setBenefits(updatedPose.getBenefits());
            existingPose.setImgUrl(updatedPose.getImgUrl());
            yogaPoseRepository.save(existingPose);
            return "Pose updated successfully";
        }).orElse("Pose not found with ID: " + poseId);
    }


    public String deletePoseById(Long poseId) {
        yogaPoseRepository.deleteById(poseId);
        return "Pose deleted successfully";
    }
}
