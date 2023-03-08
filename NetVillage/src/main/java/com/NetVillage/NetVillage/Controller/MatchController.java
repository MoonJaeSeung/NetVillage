package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class MatchController {
    @Autowired
    final private MatchService matchService;

    @GetMapping("/Match/list")
    public List<TbMatch> getMatchList()
    {
        return matchService.getMatchList();
    }

    @GetMapping("/Match/list/{category}")
    public List<TbMatch> getMatchList1(@PathVariable("category") String category)
    {
        System.out.println("ss");
        return matchService.getMatchList1(category);
    }

    @PostMapping("/api/boards")
    public int add(@RequestBody Map<String, String> requestBody) {

        TbMatch tbMatch = new TbMatch();

        // Set the values from the requestBody to the tbMatch object
        tbMatch.setMent(requestBody.get("ment"));
        tbMatch.setCategory(Integer.parseInt(requestBody.get("category")));


        // Call the service to add the new board
        return matchService.add(tbMatch);
    }

//    @PostMapping("/Match/list/edit")
//    public int edit()
//    {
//        return matchService.e
//    }

}
