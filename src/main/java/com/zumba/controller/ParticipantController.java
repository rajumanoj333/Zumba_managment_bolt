package com.zumba.controller;

import com.zumba.model.Participant;
import com.zumba.repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/participants")
public class ParticipantController {
    @Autowired
    private ParticipantRepository participantRepository;

    @GetMapping
    public String listParticipants(Model model) {
        model.addAttribute("participants", participantRepository.findAll());
        return "participants/list";
    }

    @GetMapping("/new")
    public String newParticipantForm(Model model) {
        model.addAttribute("participant", new Participant());
        return "participants/form";
    }

    @PostMapping
    public String saveParticipant(@ModelAttribute Participant participant) {
        participantRepository.save(participant);
        return "redirect:/participants";
    }

    @GetMapping("/edit/{id}")
    public String editParticipantForm(@PathVariable Long id, Model model) {
        model.addAttribute("participant", participantRepository.findById(id).orElseThrow());
        return "participants/form";
    }

    @GetMapping("/delete/{id}")
    public String deleteParticipant(@PathVariable Long id) {
        participantRepository.deleteById(id);
        return "redirect:/participants";
    }
}