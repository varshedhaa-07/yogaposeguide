package com.example.yogaposeguide.services;

import com.example.yogaposeguide.models.YogaPoses;
import com.example.yogaposeguide.repository.YogaPoseRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
