package com.zumba.controller;

import com.zumba.model.Batch;
import com.zumba.repository.BatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/batches")
public class BatchController {
    @Autowired
    private BatchRepository batchRepository;

    @GetMapping
    public String listBatches(Model model) {
        model.addAttribute("batches", batchRepository.findAll());
        return "batches/list";
    }

    @GetMapping("/new")
    public String newBatchForm(Model model) {
        model.addAttribute("batch", new Batch());
        return "batches/form";
    }

    @PostMapping
    public String saveBatch(@ModelAttribute Batch batch) {
        batchRepository.save(batch);
        return "redirect:/batches";
    }

    @GetMapping("/edit/{id}")
    public String editBatchForm(@PathVariable Long id, Model model) {
        model.addAttribute("batch", batchRepository.findById(id).orElseThrow());
        return "batches/form";
    }

    @GetMapping("/delete/{id}")
    public String deleteBatch(@PathVariable Long id) {
        batchRepository.deleteById(id);
        return "redirect:/batches";
    }
}