package com.NetVillage.NetVillage.Controller;

import com.NetVillage.NetVillage.Model.UserVo;
import com.NetVillage.NetVillage.Service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public int signUser(@RequestBody UserVo join) throws Exception{
        return userService.signUser(join);
    }

    @PostMapping("/signin")
    public UserVo loginUser(@RequestBody UserVo login) throws Exception{
        return userService.loginUser(login);
    }
}
