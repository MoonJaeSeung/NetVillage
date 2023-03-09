package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.TbMatch;
import com.NetVillage.NetVillage.Service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/main/list")
    public List<TbMatch> getMainList(){
        return mainService.getMainList();
    }
}
