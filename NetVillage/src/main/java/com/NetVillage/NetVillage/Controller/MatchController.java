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

        return matchService.getMatchList1(category);
    }

    @PostMapping("/api/boards")
    public int add(@RequestBody Map<String, String> requestBody) {
        System.out.print("add");
        TbMatch tbMatch = new TbMatch();

        // Set the values from the requestBody to the tbMatch object
        tbMatch.setUser_nick1(requestBody.get("nick"));
        tbMatch.setMent(requestBody.get("ment"));
        tbMatch.setCategory(requestBody.get("category"));
        tbMatch.setMatch_date(requestBody.get("newFilename"));
        tbMatch.setPlace(requestBody.get("place"));
        tbMatch.setGame(requestBody.get("sport"));

        // Call the service to add the new board
        return matchService.add(tbMatch);
    }

//    @PostMapping("/Match/list/edit")
//    public int edit()
//    {
//        return matchService.e
//    }

    @PostMapping("/Match/join")
    public int join(@RequestBody Map<String, String> requestBody){
        System.out.println("join");
        System.out.println(requestBody.get("match_idx"));
        System.out.println(requestBody.get("nick"));


        TbMatch tbMatch = new TbMatch();

        tbMatch.setUser_nick2(requestBody.get("nick"));
        tbMatch.setMatch_idx(Integer.valueOf(requestBody.get("match_idx")));

        return matchService.join(tbMatch);
    }

}
