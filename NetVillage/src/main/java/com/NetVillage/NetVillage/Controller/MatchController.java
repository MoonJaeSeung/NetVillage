package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

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

//    @PostMapping("/Match/list/edit")
//    public int edit()
//    {
//        return matchService.e
//    }

}
