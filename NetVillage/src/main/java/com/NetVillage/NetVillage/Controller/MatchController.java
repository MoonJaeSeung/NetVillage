package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.Match;
import com.NetVillage.NetVillage.Service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MatchController {

    final private MatchService matchService;

    @GetMapping("/Match/list")
    public List<Match> getMatchList() {
        return matchService.getMatchList();
    }
}
